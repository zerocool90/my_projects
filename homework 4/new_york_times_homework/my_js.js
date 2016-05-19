function typefinder() {
if (window.XMLHttpRequest)   { // code for IE7+, Firefox, Chrome, Opera, Safari
     xmlhttp=new XMLHttpRequest();
   } else {    // code for IE6, IE5
     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
var thetype = document.myform.type;//grabs the value of the buttons that are pressed

    if (thetype[1].checked){
        //this checks to see what type of list is checked and then gets the corisponding api
        var url = 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=86f73ea50947fce2dbd9d690a0bdcdcb%3A7%3A74322000';

        xmlhttp.open("GET",url,true);
        xmlhttp.send();}
    
     if (thetype[0].checked){
        var url = 'http://api.nytimes.com/svc/books/v3/lists/hardcover-nonfiction.json?api-key=86f73ea50947fce2dbd9d690a0bdcdcb%3A7%3A74322000';

        xmlhttp.open("GET",url,true);
        xmlhttp.send();}
  
   xmlhttp.onreadystatechange=function() {
       pic_variable ="<img src='ajax-loader.gif'>";//variable that equals the image tag and source so that way i can paste it into the DOM HTML 
   if(xmlhttp.readyState == 3){document.getElementById("table").innerHTML=pic_variable;}
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var myObject = JSON.parse( xmlhttp.responseText);
//alert(myObject);
    
  
var thetop = document.myform.top;//grabs the value of the top 5, top 10, or top 20 books

       
    if(thetype[1].checked){//fiction
        if(thetop[0].checked){//top 5

            //variable that equals the tags and source so that way i can paste it into the DOM HTML
               var tableout = "<tr><th>Title</th><th>Rank</th><th>Last Week Rank</th><th>Author</th><th>Description</th><th>Image</th><th>ISBN10</th><th>ISBN13</th><th>Publisher</th></tr>";
       for (i = 0; i < 5; i++) {
           
           //loop that only iterates through the first 5 to get the top 5 books of the fiction category
                tableout += "<tr><td>"+toTitleCase(myObject.results.books[i].title)+"</td><td>" + myObject.results.books[i].rank + "</td><td>"+myObject.results.books[i].rank_last_week+"</td><td>"+myObject.results.books[i].author+"</td><td>"+myObject.results.books[i].description+"</td><td>"+"<img src =\""+myObject.results.books[i].book_image+"\"></img></td><td>"+myObject.results.books[i].isbns[0].isbn10+"</td><td>"+ myObject.results.books[i].isbns[0].isbn13+"</td><td>"+myObject.results.books[i].publisher+"</td></tr>";
        
       //toTitleCase(myObject.results.books[i].title); 
           //alert(myObject.results.books[i].title);
       }
            
   document.getElementById("table").innerHTML= tableout;     
        
        
        }    
    
            
        
    if(thetop[1].checked){//top 10
            //alert("ficition top 10");
        var tableout = "<tr><th>Title</th><th>Rank</th><th>Last Week Rank</th><th>Author</th><th>Description</th><th>Image</th><th>ISBN10</th><th>ISBN13</th><th>Publisher</th></tr>";
        for (i = 0; i < 10; i++) {
            tableout += "<tr><td>"+toTitleCase(myObject.results.books[i].title)+"</td><td>" + myObject.results.books[i].rank + "</td><td>"+myObject.results.books[i].rank_last_week+"</td><td>"+myObject.results.books[i].author+"</td><td>"+myObject.results.books[i].description+"</td><td>"+"<img src =\""+myObject.results.books[i].book_image+"\"></img></td><td>"+myObject.results.books[i].isbns[0].isbn10+"</td><td>"+ myObject.results.books[i].isbns[0].isbn13+"</td><td>"+myObject.results.books[i].publisher+"</td></tr>";
        }document.getElementById("table").innerHTML= tableout;
        }

    if(thetop[2].checked){//top 20
           // alert("fiction top 20");
        var tableout = "<tr><th>Title</th><th>Rank</th><th>Last Week Rank</th><th>Author</th><th>Description</th><th>Image</th><th>ISBN10</th><th>ISBN13</th><th>Publisher</th></tr>";
        for (i = 0; i < 20; i++) {
            tableout += "<tr><td>"+toTitleCase(myObject.results.books[i].title)+"</td><td>" + myObject.results.books[i].rank + "</td><td>"+myObject.results.books[i].rank_last_week+"</td><td>"+myObject.results.books[i].author+"</td><td>"+myObject.results.books[i].description+"</td><td>"+"<img src =\""+myObject.results.books[i].book_image+"\"></img></td><td>"+myObject.results.books[i].isbns[0].isbn10+"</td><td>"+ myObject.results.books[i].isbns[0].isbn13+"</td><td>"+myObject.results.books[i].publisher+"</td></tr>";
        }document.getElementById("table").innerHTML= tableout;
        }}
if(thetype[0].checked){//non-fiction
    
        if(thetop[0].checked){//top 5
            //alert("non-fiction top 5");
            var tableout = "<tr><th>Title</th><th>Rank</th><th>Last Week Rank</th><th>Author</th><th>Description</th><th>Image</th><th>ISBN10</th><th>ISBN13</th><th>Publisher</th></tr>";
            for (i = 0; i < 5; i++) {
                tableout += "<tr><td>"+toTitleCase(myObject.results.books[i].title)+"</td><td>" + myObject.results.books[i].rank + "</td><td>"+myObject.results.books[i].rank_last_week+"</td><td>"+myObject.results.books[i].author+"</td><td>"+myObject.results.books[i].description+"</td><td>"+"<img src =\""+myObject.results.books[i].book_image+"\"></img></td><td>"+myObject.results.books[i].isbns[0].isbn10+"</td><td>"+ myObject.results.books[i].isbns[0].isbn13+"</td><td>"+myObject.results.books[i].publisher+"</td></tr>";
            }document.getElementById("table").innerHTML= tableout;
        }
         if(thetop[1].checked){//top 20
            //alert("non-fiction top 20");
            var tableout = "<tr><th>Title</th><th>Rank</th><th>Last Week Rank</th><th>Author</th><th>Description</th><th>Image</th><th>ISBN10</th><th>ISBN13</th><th>Publisher</th></tr>";
            for (i = 0; i < 10; i++) {
                tableout += "<tr><td>"+toTitleCase(myObject.results.books[i].title)+"</td><td>" + myObject.results.books[i].rank + "</td><td>"+myObject.results.books[i].rank_last_week+"</td><td>"+myObject.results.books[i].author+"</td><td>"+myObject.results.books[i].description+"</td><td>"+"<img src =\""+myObject.results.books[i].book_image+"\"></img></td><td>"+myObject.results.books[i].isbns[0].isbn10+"</td><td>"+ myObject.results.books[i].isbns[0].isbn13+"</td><td>"+myObject.results.books[i].publisher+"</td></tr>";
            }document.getElementById("table").innerHTML= tableout;
        }
        if(thetop[2].checked){//top 20
            //alert("non-fiction top 20");
            var tableout = "<tr><th>Title</th><th>Rank</th><th>Last Week Rank</th><th>Author</th><th>Description</th><th>Image</th><th>ISBN10</th><th>ISBN13</th><th>Publisher</th></tr>";
            for (i = 0; i < 20; i++) {
                tableout += "<tr><td>"+toTitleCase(myObject.results.books[i].title)+"</td><td>" + myObject.results.books[i].rank + "</td><td>"+myObject.results.books[i].rank_last_week+"</td><td>"+myObject.results.books[i].author+"</td><td>"+myObject.results.books[i].description+"</td><td>"+"<img src =\""+myObject.results.books[i].book_image+"\"></td><td>"+myObject.results.books[i].isbns[0].isbn10+"</td><td>"+ myObject.results.books[i].isbns[0].isbn13+"</td><td>"+myObject.results.books[i].publisher+"</td></tr>";
            }document.getElementById("table").innerHTML= tableout;
        }

   }}}}            
 function toTitleCase(str){
            return str.replace(/\w*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        //uses regex to format 
}     