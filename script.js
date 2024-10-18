const ques =[
    {
        Q:'What does the "M" in MERN stack stand for?',
        options:['MongoDB','MySQL','MariaDB','MSSQL']
    },
    {
        Q:'Which of the following is a JavaScript runtime used in the MERN stack?',
        options:['Ruby on Rails','Node.js','Django','Flask']
    },
    {
        Q:'Which HTML tag is used to create a hyperlink?',
        options:['<a>','<link>','<href>','<nav>']
    },
    {
        Q:'Which CSS property is used to change the text color of an element?',
        options:['font-color','text-color','color','background-color']
    },
    {
        Q:'In JavaScript, how do you declare a variable?',
        options:['var','let','const','All of the above']
    }
]

const answer =['MongoDB','Node.js','<a>','color','All of the above'];

const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryagn = document.querySelector('.btn');




let m=0;

function quiz(){
    question.innerHTML = ques[m].Q;

    for(let i =0;i< opt.length;i++){
        opt[i].innerHTML = ques[m].options[i];
        opt[i].parentElement.style.backgroundColor='gray';
        next.style.display = 'none';
    }   
    
    for(item of opt){
        item.addEventListener('click',(e)=>{
            let value = e.target.innerText;

            if(value == answer[m]){
                e.target.parentElement.style.backgroundColor='green';
                next.style.display = 'flex';
            }
        })
    }
}

quiz();