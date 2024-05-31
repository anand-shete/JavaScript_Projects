let passwordLen = document.querySelector('.length');

password = () => {
    let len = 7;
    if (passwordLen.value != ('') )
        len = passwordLen.value;

    let passwd = '';
    for (let i = 0; i < len; i++) {
        let u = String.fromCharCode(65 + Math.floor(26 * Math.random()))
        let l = String.fromCharCode(97 + Math.ceil(25 * Math.random()))
        let s = String.fromCharCode(33 + Math.ceil(14 * Math.random()))
        passwd += u + l + s;
    }
    passwd = passwd.slice(0, len)
    if (document.body.querySelector('.input') != undefined) {
        let inputTag = document.querySelector('.input');
        return inputTag.value = passwd
    }

    let newDiv = document.createElement('div');
    let inputTag = document.createElement('input');
    let btn = document.createElement('button');
    

    inputTag.classList.add('mt-4', 'mb-4', 'input');
    inputTag.value = passwd;
    document.body.appendChild(newDiv);
    newDiv.appendChild(inputTag);

    btn.innerText = 'Copy';
    btn.classList.add('button')
    btn.onclick = copied;
    newDiv.appendChild(btn);
    let x = document.querySelector('.button')
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        len = passwordLen;
        password();
    }
})

copied = () => {
    let input = document.querySelector('.input');
    navigator.clipboard.writeText(input.value)
        .then(() => {
           document.querySelector('.button').innerText = 'Copied!';
        })
        .catch((er) => console.log(er))
}