//🌟 Exercise 6 : Fortune teller

//1
function fortune(numberChildren, partner, geoLocation, jobTitle) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partner} with ${numberChildren} kids.`
    document.body.appendChild(paragraph);
}