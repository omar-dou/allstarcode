var targetDiv = document.getElementById('p-div');
targetDiv.style.display = "block";

function addp() {
    var paragraph = document.createElement('p');

    paragraph.textContent = "Wow this is a Paragraph!";

    var targetDiv = document.getElementById('p-div');
    targetDiv.style.display = "block";
    targetDiv.appendChild(paragraph);

    var targetdiv2 = document.getElementById('img-div');
        targetdiv2.style.display = "none";
}

var button = document.getElementById('p-button');

button.addEventListener('click', addp);


function addImage() {
    var img = document.createElement('img');

    img.src = "kirby-pink.png"; 

    var targetDiv = document.getElementById('img-div');
        targetDiv.style.display = "block";
        targetDiv.appendChild(img);
    var targetdiv2 = document.getElementById('p-div');
        targetdiv2.style.display = "none";

}


var button = document.getElementById('img-button');

button.addEventListener('click', addImage);
