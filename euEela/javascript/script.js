const button = document.querySelector('.clickBtn')
const text = document.querySelector('.text')
const closeBtn = document.querySelector('.closeText')

function clickou(){
    button.style.visibility = 'hidden'
    text.style.visibility = 'visible'
    closeBtn.style.visibility = 'visible'
}

function closeTxt(){
    button.style.visibility = 'visible'
    text.style.visibility = 'hidden'
    closeBtn.style.visibility = 'hidden'
}