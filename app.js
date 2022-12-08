// burger menu 

let burgerMenu = document.querySelector('nav .humMenu i');
let rightSlide = document.querySelector('.SideNav');
let leaveSlide = document.querySelector('.SideNav .back i');  
let sideListe = document.querySelectorAll('.sideNavBar a');  



burgerMenu.addEventListener('click',function(){
    


        rightSlide.style.transform = 'translateX(0%)'
        
        isClicked = false


})

leaveSlide.addEventListener('click',function(){
        rightSlide.style.transform = 'translateX(110%)';




})


sideListe.forEach((liste)=>{

liste.addEventListener('click',function(){

    rightSlide.style.transform = 'translateX(110%)';


})


})









// question on click

let questions = document.querySelectorAll('.question');





questions.forEach((question)=>{




question.addEventListener('click',function(e){




    let answer = question.nextElementSibling;
let arrow = question.children[1];
let answerText = question.nextElementSibling.children[0];




    if(question.classList.contains('off')){
        answer.style.height = 'fit-content';
        
    answer.style.marginBottom ='2em'; 
    answerText.style.opacity = '1';
    answerText.style.bottom = '0';
    arrow.style.transform= 'rotate(180deg)'

    question.classList.remove('off');
    question.classList.add('on');

   
    }else if(question.classList.contains('on')){
        answer.style.height = '0em';
        answer.style.marginBottom ='0em'; 
        answerText.style.opacity = '0';
        answerText.style.bottom = '-100%';
    
        arrow.style.transform= 'rotate(0deg)'
    
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




hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
