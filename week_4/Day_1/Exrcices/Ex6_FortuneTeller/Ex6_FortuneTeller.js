//🌟 Exercise 6 : Fortune teller

//1
function fortune(numberChildren, partner, geoLocation, jobTitle) {
    const div = document.getElementsByClassName('p')
    const paragraph = document.createElement('p');
    paragraph.style.fontSize = "18px";
    paragraph.style.fontWeight = "bold";
    paragraph.style.color = "blue";
    paragraph.style.textAlign = "center";
    paragraph.style.margin = "20px 0";
    paragraph.textContent = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partner} with ${numberChildren} kids.`
    document.body.appendChild(paragraph);
}

fortune(10,'ther','UK','devloper')

