$(function() {
	var $submit = $('button');

$submit.click(function(search) {
	search.preventDefault();

	var test = document.getElementById("search").value;
	var url = "https://pixabay.com/api/?key=2757316-3492e7bb4a63ff3626d266c82&q="+test+"&image_type=photo";
	
	$.getJSON(url, function(data){
  	var ul = document.createElement("ul");
  	$.each(data.hits, function(i, val){
     var li = document.createElement("li");
     var inner = '<a href="'+val.pageURL+'" title="'+val.pageURL+'" target="_blank">'+'<img src=\"'+val.previewURL+'\" alt="car" >'+val.tags+'</a>';
      li.innerHTML = inner;
      ul.appendChild(li);
    });
    $('div').html(ul);
	});
});
});



function Human() {
	this.name = "Jack";
	this.age = 25;
	this.sex = 'man';
	this.grows = 185;
	this.weight = 70;
};



function Worker() {
	this.place = 'driwer';
	this.salary = 1000;
	this.work = function() {
		console.log("Work");
	};
};

function Student() {
	this.place = 'KPI';
	this.salary = 500;
	this.watch = function() {
		console.log("Watch TV");
	};
};

Worker.prototype = new Human();
Student.prototype = new Human();

var newWorker1 = new Worker();
var newWorker2 = new Worker();
var newWorker3 = new Worker();

console.log('newWorker1.name', newWorker1.name);
console.log('newWorker2.grows', newWorker2.grows);
newWorker3.work();

var newStudent1 = new Student();
var newStudent2 = new Student();
var newStudent3 = new Student();

console.log('newStudent1', newStudent1);
console.log('newStudent2.age', newStudent2.age);
newStudent3.watch();
