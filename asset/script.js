const hamburger = document.querySelector('.hamburger')
const cancel = document.querySelector('.cancel')
const hid = document.querySelector('.hid')


hamburger.addEventListener('click', () => {
    if (hamburger) {
        hid.style.display = 'flex';
    } 

})

cancel.addEventListener('click', () => {
    
        hid.style.display = 'none';

})
