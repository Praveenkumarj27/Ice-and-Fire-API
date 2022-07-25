let div=document.createElement("div");
let head=document.createElement("header");
head.setAttribute("class","header");
div.setAttribute("class","container");
head.innerHTML=`<h1 >Books</h1>`
div.innerHTML=`<div class="book">
<h2 id="title0"></h2>
<p id="author0"></p>
<p id="nop0"></p>
<p id="isbn0"></p>
<p id="publisher0"></p>
<p id="releasedate0"></p>
<p id="characters0"></p>
</div>
<div class="book">
<h2 id="title1"></h2>
<p id="author1"></p>
<p id="nop1"></p>
<p id="isbn1"></p>
<p id="publisher1"></p>
<p id="releasedate1"></p>
<p id="characters1"></p>
</div>
<div class="book">
<h2 id="title2"></h2>
<p id="author2"></p>
<p id="nop2"></p>
<p id="isbn2"></p>
<p id="publisher2"></p>
<p id="releasedate2"></p>
<p id="characters2"></p>
</div>
<div class="book">
<h2 id="title3"></h2>
<p id="author3"></p>
<p id="nop3"></p>
<p id="isbn3"></p>
<p id="publisher3"></p>
<p id="releasedate3"></p>
<p id="characters3"></p>
</div>
<div class="book">
<h2 id="title4"></h2>
<p id="author4"></p>
<p id="nop4"></p>
<p id="isbn4"></p>
<p id="publisher4"></p>
<p id="releasedate4"></p>
<p id="characters4"></p>
</div>
<div class="book">
<h2 id="title5"></h2>
<p id="author5"></p>
<p id="nop5"></p>
<p id="isbn5"></p>
<p id="publisher5"></p>
<p id="releasedate5"></p>
<p id="characters5"></p>
</div>
<div class="book">
<h2 id="title6"></h2>
<p id="author6"></p>
<p id="nop6"></p>
<p id="isbn6"></p>
<p id="publisher6"></p>
<p id="releasedate6"></p>
<p id="characters6"></p>
</div>
<div class="book">
<h2 id="title7"></h2>
<p id="author7"></p>
<p id="nop7"></p>
<p id="isbn7"></p>
<p id="publisher7"></p>
<p id="releasedate7"></p>
<p id="characters7"></p>
</div>
<div class="book">
<h2 id="title8"></h2>
<p id="author8"></p>
<p id="nop8"></p>
<p id="isbn8"></p>
<p id="publisher8"></p>
<p id="releasedate8"></p>
<p id="characters8"></p>
</div>
<div class="book">
<h2 id="title9"></h2>
<p id="author9"></p>
<p id="nop9"></p>
<p id="isbn9"></p>
<p id="publisher9"></p>
<p id="releasedate9"></p>
<p id="characters9"></p>
</div>`
document.body.append(head,div);

    async function ice(){
       try {
        let books=await fetch("https://www.anapioficeandfire.com/api/books");
        let result=await books.json()
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          document.getElementById("title"+i).innerText=`${result[i].name}`
          document.getElementById("author"+i).innerHTML= ` <b>Author:</b> ${result[i].authors}`
          document.getElementById("nop"+i).innerHTML=`<b>No of pages:</b> ${result[i].numberOfPages}`
          document.getElementById("isbn"+i).innerHTML=`<b>isbn:</b> ${result[i].isbn}`
          document.getElementById("publisher"+i).innerHTML=`<b>Publisher:</b> ${result[i].publisher}`
          document.getElementById("releasedate"+i).innerHTML=`<b>Released:</b> ${result[i].released}` 
        }
      } catch (error) {
        console.log(error);
      }
    }ice();
    