
window.onload=function(){
  var filter_button = document.querySelector("#filter_button");
var data = [
  [
      "Understanding ECMAScript 6",
      "Nicholas C. Zakas",
      "Computers",
      "2016-09-03"
  ],
  [
      "College Physics: Volume 1",
      "Paul Peter",
      "Physics",
      "1997-08-04"
  ],
  [
      "You don't know JS yet",
      "Kyle Simpson",
      "Computers",
      "2020-01-28"
  ],
  [
      "The Hunted",
      "Gabriel Bergmoser",
      "Horror",
      "2020-04-03"
  ],
  [
      "The Time Machine",
      "HG Wells",
      "Sci-Fi",
      "2008-09-08"
  ],
  [
      "I Too Had a Love Story",
      "Ravinder Singh",
      "Love Story",
      "08-09-2005"
  ],
  [
      "The Elegant Universe",
      "Brian Greene",
      "Physics",
      "2011-07-09"
  ],
  [
      "Without a Hitch",
      "Asher Fogle Paul",
      "Love Story",
      "2002-05-07"
  ],
  [
      "The Journey Beyond 4",
      "Exotic Arts",
      "Sci-Fi",
      "2017-02-08"
  ],
  [
      "Beyond Einstein",
      "Michio kaku",
      "Physics",
      "1997-02-03"
  ],
  [
      "The Shining",
      "Stephen King",
      "Horror",
      "1977-01-28"
  ],
  [
      "Pro Git",
      "Scott Chacon and Ben Straub",
      "Computers",
      "2014-11-18"
  ],
  [
      "Neuromancer",
      "William Gibson",
      "Sci-Fi",
      "28-05-1984"
  ],
  [
       "Outlander",
       "Diana Gabaldon",
       "Love Story",
       "11-08-1989"
  ]
];

filter_button.addEventListener("click", ()=>{
    
  let table_body = document.querySelector(".table_body ul");
  let search_name = document.getElementById("search_name").value.toLowerCase();
  let search_author = document.getElementById("search_author").value.toLowerCase();
  let search_subject = document.getElementById("search_subject").value.toLowerCase();
  let search_date = document.getElementById("search_date").value;
  console.log(search_name==='', search_author, search_subject, search_date);
  let inner=''
 data.forEach((item)=>{
  console.log(search_name==='' || item[0].toLowerCase().indexOf(search_name)!=-1);
  if((search_name==='' || item[0].toLowerCase().indexOf(search_name)!=-1) && (search_author==='' || item[1].toLowerCase().indexOf(search_author)!=-1) && (search_subject==='' || item[2].toLowerCase().indexOf(search_subject)!=-1) && (search_date==='' || item[3]===search_date)){
    inner+=`<li>
  <div class="item">
    <div class="name">
      <span>${item[0]}</span>
    </div>
    <div class="author">
      <span>${item[1]}</span>
    </div>
    <div class="subject">
      <span>${item[2]}</span>
    </div>
    <div class="date">
      <span class="open">${item[3]}</span>
    </div>
  </div>
</li>`
  }
 })
 table_body.innerHTML=inner;

});

}


