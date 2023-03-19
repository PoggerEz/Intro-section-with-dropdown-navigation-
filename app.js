const fArrow = document.querySelector('.f-arrow');
const fDrop = document.querySelector('.features-drop');
const cArrow = document.querySelector('.c-arrow');
const cDrop = document.getElementById('com-drop');
fArrow.addEventListener('click',()=>{
    fDrop.classList.toggle('f-drop');
    fArrow.classList.toggle('arrow-up');
})
cArrow.addEventListener('click',()=>{
    cDrop.classList.toggle('c-drop')
    cArrow.classList.toggle('arrow-up');
})