$("div.featured").toggleClass("featured");
$("div.main-article").prev().toggleClass("featured");
$("div.main-article").next().toggleClass("featured");
$("a").first().prop("href", "https://www.google.com");
$("p").css("font-size","20px");

// First Method
// $("input").on("keyup", function(e){
//     var value = $("input").val();
//     $("h1").first().text(value);
// })

// Second Method
$("input").on("keyup", function(){
    $("h1").first().text($("input").val());
})


$("li").last().remove();
$(".article").first().prepend("<h3>The 1st article(added with prepend)</h3>");
$(".main-article").append("<strong>Note: this note is added with append.</strong>");
$("<i>a list item</i>").insertBefore("li");
$("<i>this is inserted after each H3</i>").insertAfter("h3");


// $("p").each(function(){
//     var paralength = $(this).text().length;
//     $(this).append("<strong>this parag length is: </strong>", paralength);
// })

var pars = $("p");
pars.each(function(){
    var current = $(this);
    var len = current.text().length;
    current.append("<h5>len is: "  + len + "</h5>");
});


// DOM TREE

var family1 = $('#family1');

var family2 = $('<div id="family2"><h1>Family2</h2></div>');
var bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
var madison = $('<div id="madison"><h3>Madison</h3></div>');
var hunter = ('<div id="hunter"><h3>Hunter</h3></div>');

family2.append(bruce);
bruce.append(madison, hunter);
family2.insertAfter(family1);