

let popup =document.getElementById('popup');
let close =document.getElementById('close');
let effect1 =document.getElementById('effect1');
let effect2 =document.getElementById('effect2');
let btn6 =document.getElementById('btn6');
let btn7 =document.getElementById('btn7');
const content = Array.from(document.getElementsByClassName('playBtn'));


const randomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

const gradient = () => {
    const color1 = randomColor();
    const color2 = randomColor();
    btn6.style.backgroundImage = `linear-gradient(to left top, #${color1},#${color2})`;
    btn7.style.backgroundImage = `linear-gradient(to left top, #${color1},#${color2})`;
    popup.style.backgroundImage = `linear-gradient(to right bottom, #${color1},#${color2})`;
}
gradient();

content.forEach(playBtn => {
    playBtn.addEventListener('click',function(){
        popup.classList.add('open-popup');
        effect1.classList.add('blur');
        effect2.classList.add('blur');
    console.log('maza aaya')
});
});

close.addEventListener('click',function(){
     popup.classList.remove('open-popup');
     effect1.classList.remove('blur');
     effect2.classList.remove('blur');
 console.log('maza aaya')
});



