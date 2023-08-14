'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.btn');
console.log(btnOpenModal);


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');  
}

const closemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (let i = 0; i< btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click',openModal)


btnCloseModal.addEventListener('click',closemodal);
overlay.addEventListener('click', closemodal);
  
document.addEventListener('keydown', function(e)
{
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) { 
        closemodal();
    }
});
