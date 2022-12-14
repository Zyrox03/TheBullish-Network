// burger menu 

let burgerMenu = document.querySelector('nav .humMenu i');
let rightSlide = document.querySelector('.SideNav');
let leaveSlide = document.querySelector('.SideNav .back i');
let sideListe = document.querySelectorAll('.sideNavBar a');




burgerMenu.addEventListener('click', function () {



    rightSlide.style.transform = 'translateX(0%)'

    isClicked = false


})

leaveSlide.addEventListener('click', function () {
    rightSlide.style.transform = 'translateX(110%)';




})


sideListe.forEach((liste) => {

    liste.addEventListener('click', function () {

        rightSlide.style.transform = 'translateX(110%)';


    })


})














// question on click

let questions = document.querySelectorAll('.question');





questions.forEach((question) => {




    question.addEventListener('click', function (e) {




        let answer = question.nextElementSibling;
        let arrow = question.children[1];
        let answerText = question.nextElementSibling.children[0];




        if (question.classList.contains('off')) {
            answer.style.height = 'fit-content';

            answer.style.marginBottom = '2em';
            answerText.style.opacity = '1';
            answerText.style.bottom = '0';
            arrow.style.transform = 'rotate(180deg)'

            question.classList.remove('off');
            question.classList.add('on');


        } else if (question.classList.contains('on')) {
            answer.style.height = '0em';
            answer.style.marginBottom = '0em';
            answerText.style.opacity = '0';
            answerText.style.bottom = '-100%';

            arrow.style.transform = 'rotate(0deg)'

            question.classList.remove('one');
            question.classList.add('off');
        }


    })
})




// css animations


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }
        else {
            // entry.target.classList.remove('show');


        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements1 = document.querySelectorAll('.hidden1')
const hiddenElements2 = document.querySelectorAll('.hidden2')
const hiddenElements3 = document.querySelectorAll('.hidden3')




hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));


// nav on scroll 


var myNav = document.getElementById('nav');
window.onscroll = function () {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};





// caroussel comment

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let onComment = document.querySelector('.onComment');

function previousComment(onComment) {

    if (onComment.previousElementSibling) {

        onComment.style.transform = 'translateX(100%)'
        onComment.previousElementSibling.style.transform = 'translateX(0%)'
        onComment.previousElementSibling.classList.add('onComment');
        onComment.classList.remove('onComment');

    }
}

function nextComment(onComment) {
    if (onComment.nextElementSibling) {

        onComment.style.transform = 'translateX(-100%)'
        onComment.nextElementSibling.style.transform = 'translateX(0%)'
        onComment.nextElementSibling.classList.add('onComment');
        onComment.classList.remove('onComment');
    }

}

// prev.addEventListener('click', function () {
//     let onComment = document.querySelector('.onComment');

//     previousComment(onComment)
// })


// next.addEventListener('click', function () {
//     let onComment = document.querySelector('.onComment');

//     nextComment(onComment)

// })



// online users API




let onlineMembers = document.querySelector('.onlineMembers');


let getCountMembers = async () => {

    try {

        let res = await axios.get('https://discord.com/api/guilds/1006357259854557235/widget.json');

        let result = res.data.members.length;
        return onlineMembers.innerText = result;




    }
    catch (e) {
        console.log("Something went wrong :(", e);


    }



}
getCountMembers()



// swiper.js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    initialSlide : 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      reverseDirection: false,
    },

    slidesPerView : 1,
    spaceBetween :20 ,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


   
  