function displayText() {
    var inputText = document.getElementById('userInput').value;
    document.getElementById('displayText').innerText = inputText;
}

function changeBackgroundColor() {
    var colors = ['#ff7f7f', '#7fff7f', '#7f7fff', '#ffff7f', '#ff7fff', '#7fffff'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
