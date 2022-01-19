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


    const doWish = (index) => {
        wishes[index].done = !wishes[index].done;
    };

    const createWishTemplate = (wish, i) => {
        return `
        <div id = "wish-item" class="wishlist__item wish ${wish.done ? 'completed' : ''}">
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
            <button id = "done-wish">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6726 19L13.6696 19C13.6316 19.0002 13.5941 18.9918 13.5599 18.9753C13.526 18.959 13.4962 18.9353 13.4728 18.9058C13.4726 18.9056 13.4723 18.9053 13.4721 18.905L10.4266 15.0232C10.4264 15.0229 10.4261 15.0226 10.4259 15.0223C10.406 14.9965 10.3913 14.967 10.3826 14.9355C10.3738 14.9037 10.3714 14.8704 10.3755 14.8377C10.3796 14.8049 10.3901 14.7733 10.4064 14.7445C10.4227 14.7158 10.4445 14.6906 10.4705 14.6703C10.5232 14.6294 10.5899 14.611 10.6561 14.6192C10.6889 14.6233 10.7205 14.6338 10.7492 14.6501C10.7779 14.6664 10.8031 14.6882 10.8234 14.7143L10.8254 14.7168L12.8629 17.3168L13.6642 18.3394L14.4477 17.3031L19.1702 11.0563C19.1705 11.056 19.1707 11.0557 19.1709 11.0554C19.1913 11.0289 19.2167 11.0067 19.2456 10.9899C19.2748 10.9729 19.3071 10.9618 19.3406 10.9573C19.3741 10.9528 19.4082 10.9549 19.4409 10.9635C19.4736 10.9722 19.5043 10.9872 19.5312 11.0077C19.5581 11.0282 19.5807 11.0538 19.5976 11.0831C19.6147 11.1123 19.6257 11.1446 19.6302 11.1781C19.6348 11.2116 19.6326 11.2457 19.624 11.2784C19.6153 11.3111 19.6003 11.3418 19.5798 11.3687L19.375 11.6372V11.675L13.8701 18.9025C13.8698 18.9029 13.8695 18.9033 13.8692 18.9037C13.846 18.9334 13.8164 18.9575 13.7827 18.9742C13.7484 18.9911 13.7108 18.9999 13.6726 19ZM15 1.5C12.33 1.5 9.71987 2.29176 7.49981 3.77516C5.27974 5.25856 3.54942 7.36697 2.52763 9.83377C1.50585 12.3006 1.2385 15.015 1.7594 17.6337C2.2803 20.2525 3.56606 22.6579 5.45406 24.5459C7.34207 26.434 9.74754 27.7197 12.3663 28.2406C14.985 28.7615 17.6994 28.4942 20.1662 27.4724C22.633 26.4506 24.7414 24.7203 26.2248 22.5002C27.7082 20.2801 28.5 17.67 28.5 15C28.5 13.2272 28.1508 11.4717 27.4724 9.83377C26.7939 8.19588 25.7995 6.70765 24.5459 5.45406C23.2924 4.20047 21.8041 3.20607 20.1662 2.52763C18.5283 1.84919 16.7729 1.5 15 1.5Z" stroke= ${wish.done ? 'white' : '#7A9D40'} stroke-opacity= ${wish.done ? "1" : "0.72"} stroke-width="2"/>
            </svg>
            </button>

            <button id = "delete-wish">
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_26_9)">
            <path d="M18.1476 13.6364V21.8182M1.64758 6.81819H28.6476H1.64758ZM25.6476 6.81819V25.9091C25.6476 26.6324 25.3315 27.3261 24.7689 27.8376C24.2063 28.349 23.4432 28.6364 22.6476 28.6364H7.64758C6.85193 28.6364 6.08887 28.349 5.52626 27.8376C4.96365 27.3261 4.64758 26.6324 4.64758 25.9091V6.81819H25.6476ZM9.14758 6.81819V4.09092C9.14758 3.3676 9.46365 2.67391 10.0263 2.16245C10.5889 1.65098 11.3519 1.36365 12.1476 1.36365L18.1476 1.36365C18.9432 1.36365 19.7063 1.65098 20.2689 2.16245C20.8315 2.67391 21.1476 3.3676 21.1476 4.09092V6.81819H9.14758ZM12.1476 13.6364V21.8182V13.6364Z" stroke= ${wish.done ? 'white' : '#432C26'} stroke-opacity= ${wish.done ? "1" :"0.61"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_26_9">
            <rect width="30" height="30" fill="white" transform="translate(0.147583)"/>
            </clipPath>
            </defs>
            </svg>

            </button>
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

    fillWishlist();

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


    const searchChecker = () => {
        if(wishes.length > 0){
            const check = document.querySelectorAll('#done-wish');
            check.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    wishes[index].done = !wishes[index].done;
                    console.log(wishes[index].done);
                    fillWishlist();
                    updateLocal();

                    //think about avoiding reload!!!
                    window.location.reload();
                });

            });
            
            // check.addEventListener('click', () => {
            //     wishes[0].done = true;
            //     console.log(wishes[0].done);
            //     fillWishlist();
            //     updateLocal();
            // });
        }
    };


    addWishBtn.addEventListener('click', () => {
        wishes.push(new Wish(wishName.value));
        updateLocal();
        fillWishlist();
        wishName.value = "";
        //костыль!
        window.location.reload();
        // console.log(wishes);
    });

    searchChecker();
    




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