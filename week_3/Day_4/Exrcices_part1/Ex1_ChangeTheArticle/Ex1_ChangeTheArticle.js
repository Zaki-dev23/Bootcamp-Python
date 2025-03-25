//🌟 Exercise 1 : Change the article


 //1
 let h1 = document.querySelector("h1");
 console.log(h1);

 //2
 let lastParagraph = document.querySelector('article:last-of-type p:last-of-type');
 lastParagraph.remove();

 //3
 let h2 = document.querySelector("h2");
 h2.addEventListener("click", function () {
     h2.style.backgroundColor = "red";
 });

 //4
 let h3 = document.querySelector("h3");
 h3.addEventListener("click", function () {
     h3.style.display = "none";
 });

 // Make all paragraphs bold on button click
 let boldButton = document.querySelector('button');
 boldButton.addEventListener("click", function () {
     let paragraphs = document.querySelectorAll("p");
     paragraphs.forEach(p => {
         p.style.fontWeight = "bold";
     });
 });

 // BONUS: Random font size on h1 hover
 h1.addEventListener("mouseover", function () {
     let randomSize = Math.floor(Math.random() * 100) + "px";
     h1.style.fontSize = randomSize;
 });

 // BONUS: Fade out effect on the second paragraph hover
 let secondParagraph = document.querySelector("article:nth-of-type(2)");
 secondParagraph.addEventListener("mouseover", function () {
     secondParagraph.classList.add("fade-out");
 });