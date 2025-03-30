//🌟 Exercise 7 : Welcome


(function (name) {
    let nav = document.querySelector('nav')
    let div = document.createElement("div")
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "10px";
    div.style.padding = "10px";
    div.style.background = "#f0f0f0";
    div.style.borderRadius = "8px";

    //image
    let img = document.createElement("img");
    img.src = "https://i.pravatar.cc/50"; 
    img.alt = "Profile Picture";
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.borderRadius = "50%";
    img.style.border = "2px solid #333";
    //span
    let span = document.createElement("span");
    span.textContent = `Welcome, ${name}!`;
    span.style.fontSize = "16px";
    span.style.fontWeight = "bold";
    span.style.color = "#333";

    div.appendChild(img);
    div.appendChild(span);
    nav.appendChild(div)
})('John')

