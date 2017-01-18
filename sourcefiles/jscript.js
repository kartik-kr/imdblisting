//intial input of text
var movies= new XMLHttpRequest();
movies.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=2521beb8b455d1a0edd6014abca25e6e&language=en-US&page=1",false);
movies.send(null);
r=JSON.parse(movies.response);
var i;
var list=[];
for(i=0;i<r.results.length;i++)
{
//alert(r.results[i].title);
list.push(r.results[i].title);
}

// function to add element
function add(inputtext){

  var li = document.createElement("li");
  var t = document.createTextNode(inputtext);
  li.appendChild(t);
  document.getElementById("mylist").appendChild(li);
  return li;
}

//function to close an element
function close(li)
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var i;

for(i=0;i<list.length;i++)
{
  var li=add(list[i]);
  close(li);
}
 

// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("newmovie").value;
  if (inputValue === '') {
    alert("No input");
  } else {
   var li = add(inputValue);
   close(li);
   document.getElementById("newmovie").value = "";
  }
}
