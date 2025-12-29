let dre = document.getElementById('dre');
let nam = document.getElementById('name');
let age = document.getElementById('age');
let logn = document.getElementById('logn');

  //   question containers
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');

let q1ans = document.getElementById('q1ans');
let q2ans = document.getElementById('q2ans');
let q3ans = document.getElementById('q3ans');
let q4ans = document.getElementById('q4ans');
let q5ans = document.getElementById('q5ans');

q1.style.display = 'none';
dre.style.display = 'block';


logn.addEventListener('click', function (e) {
    e.preventDefault();

    if (nam.value === '' || age.value === '') {
        alert('please fill fields appropriately!!!');

    }else{
        alert('login successful');
        dre.style.display = 'none';
        q1.style.display = 'block';
    }

})

function next1() {
    q1.style.display = 'none';
    q2.style.display = 'block';
}

function next2() {
    q2.style.display = 'none';
    q3.style.display = 'block';
}

function prev2() {
    q2.style.display = 'none';
    q1.style.display = 'block'
}

function prev3() {
    q3.style.display = 'none';
    q2.style.display = 'block';
}

function next3() {
    q3.style.display = 'none';
    q4.style.display = 'block';
}

function prev4() {
    q4.style.display = 'none';
    q3.style.display = 'block';
}

function next4() {
    q4.style.display = 'none';
    q5.style.display = 'block';
}
function prev5() {
    q5.style.display = 'none';
    q4.style.display = 'block';
}

function q1a() {
    q1ans.value = 'Murtola Muhammad'
};

function q1b() {
    q1ans.value = 'Olusegun Obasanjo';
}

function q1c() {
    q1ans.value = 'Bola Ahmed Tinubu';
}
function q1d() {
    q1ans.value = 'Peter Obi';
}

function q2a() {
    q2ans.value = 'Javascript';
}
function q2b() {
    q2ans.value = 'CSS';
}
function q2c(){
    q2ans.value = 'PHP';
}
function q2d() {
    q2ans.value = 'Java';
}

function q3a() {
    q3ans.value = 'Red and Green'
}
function q3b() {
    q3ans.value = 'Yellow and Purple'
}
function q3c() {
    q3ans.value = 'Gold and Red'
}
function q3d() {
    q3ans.value = 'Yellow and Red'
}

function q4a() {
    q4ans.value = '57'
}
function q4b() {
    q4ans.value = '60'
}
function  q4c(){
    q4ans.value = '33'
}
function q4d() {
    q4ans.value = '48'
}

function q5a() {
    q5ans.value = 'Cascade Style Sheet'
}
function q5b() {
    q5ans.value = 'Casacading Style Sheet'
}
function q5c() {
    q5ans.value = 'Cascade Styling Sheet'
}
function q5d() {
    q5ans.value = 'Cascading Style Sheet'
}
 //    submit answer
let sub = document.getElementById('submit');
let result = document.getElementById('result');

sub.addEventListener('click', function () {
    let counter = 0;

    if (q1ans.value === 'Bola Ahmed Tinibu') {
        counter++;
        console.log(counter);
    }
    if (q2ans.value === 'CSS') {
        counter++;
        console.log(counter);
    }
    if (q3ans.value === 'Yellow and Red') {
        counter++;
        console.log(counter);
    }
    if (q4ans.value === '33') {
        counter++;
        console.log(counter);
    }
    if (q5ans.value === 'Cascading Style Sheet') {
        counter++;
        console.log(counter);
    }
    q5.style.display = 'none';
    result.style.display = 'block';
    result.innerHTML = `Dear ${nam.value}, you scored 
    ${counter} out of 5`;
})
