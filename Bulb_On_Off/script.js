let image = document.querySelector('img');
let text = document.querySelector('button');

bulb = () => {
    let attr = image.getAttribute('src');
    console.log(attr);
    if (attr == './bulbOn.jpg') {
        image.setAttribute('src', './bulbOff.jpg');
        image.classList.remove('left');
        text.innerText = 'ON'
    } else {
        image.setAttribute('src', './bulbOn.jpg');
        image.classList.add('left');
        text.innerText = 'OFF'
    }
}