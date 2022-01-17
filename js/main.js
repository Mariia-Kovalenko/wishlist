"use strict";

window.addEventListener('DOMContentLoaded', () => {
    

    //Modal window - add wish form
    const addWish = document.querySelector('.add-wish'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');

        function openModal(){
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = "hidden";
        }

        function closeModal(){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = "";
        }

        addWish.addEventListener('click', openModal);
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', closeModal);


        //Wish view

});