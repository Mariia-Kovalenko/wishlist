"use strict";

window.addEventListener('DOMContentLoaded', () => {
    
    // adding wish
    const addWishBtn = document.getElementById('add-wish-btn');
    const wishName = document.getElementById('wish-name');
    const wishList = document.getElementById('wishes-container');

    let wishes;

    //check if localStorage already has any tasks array
    // if localstorage is empty - assign wishes to a new array, otherwise 
    // parse the excisting JSON list from localstorage
    if(!localStorage.wishes){
        wishes = [];
    }else{
        wishes = JSON.parse(localStorage.getItem('wishes'));
    }

    const createWishTemplate = (wish, i) => {
        return `
        <div class="wishlist__item wish">
        <div class="wish__inner">
            <div class="wish__image">
                <img src="icons/shopping-bag.svg" alt="img">
            </div>
            <div class="wish__data">
                <div class="wish__name">${wish.name}</div>
                <div class="wish__category">Category</div>
            </div>
        </div>
        <div class="wish__icons">
            <button><img src="icons/checkmark_item.svg" alt="done"></button>
            <button><img src="icons/trash.svg" alt="delete"></button>
        </div>
        </div>
        `;
    };
    
    const fillWishlist = () => {
        wishList.innerHTML = "";
        if(wishes.length > 0){
            wishes.forEach((element, i) => {
                wishList.innerHTML +=  createWishTemplate(element, i);
                console.log('added wish');
            });
        }
    };


    addWishBtn.addEventListener('click', (e)=> {
        e.preventDefault();
    });

    class Wish {
        constructor(name, describtion) {
            this.name = name;
            this.describtion = describtion;
            this.done = false;
        }
    }

    const updateLocal = () => {
        //adding array to browser local storage (making it JSON)
        localStorage.setItem('wishes', JSON.stringify(wishes));
    };

    addWishBtn.addEventListener('click', ()=> {
        wishes.push(new Wish(wishName.value));
        updateLocal();
        fillWishlist();
        console.log(wishes);
    });

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
        //modal.addEventListener('click', closeModal);


        //Wish view

});