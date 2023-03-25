"use strict";

//Age
var yearNow = new Date().getFullYear();
var myAge = yearNow - 1990;
document.getElementById("spanAge").innerHTML =`${myAge}`;

//---------Menu behevior---------------//
const background = document.getElementById("main");
var st = document.createElement('style');
background.append(st);
const intro = document.getElementById("intro");
const moi = document.getElementById("moi");
const portfolio = document.getElementById("portfolio");
const introBegin = document.getElementById("introduction_begin");
const introText = document.getElementById("introduction_text");
const moiText = document.getElementById("moiText");
const moiSkills = document.getElementById("moiSkills");
const portfolioWorks = document.getElementById("portfolioWorks");
const portfolioContact = document.getElementById("portfolioContact");
moi.addEventListener("click",moiTransition);
intro.addEventListener("click",introTransition );
portfolio.addEventListener("click",portfolioTransition);

//Autoplay landingpage with Loading
main.onload = loadingPage();

function loadingPage() {
    anime({targets: '#loaderIndicator', innerHTML: [0 + '%', 100 + '%'], round: 1, easing: 'easeInOutExpo', duration: 1500});
    setTimeout(showPage, 2000);
    setTimeout(loadingComplete, 1500);
}

function showPage() {
    anime({targets:['#loader', '#loaderIndicator'], opacity: -1, duration: 5000});
    anime({targets:'#main', opacity: 1, duration: 5000});
}

function loadingComplete() {
    anime({targets: '#loader', border: '16px solid rgba(255, 0, 0, 0.5)', duration: 1000});
}

anime.timeline({duration: 3000, autoplay: true})
.add({targets: introBegin, opacity: 1},3100)
.add({targets: introText, opacity: 1},3600);

//Click On Moi
function moiTransition() {
    var tl = anime.timeline({duration: 3000});
    tl
    .add({targets: introBegin, opacity: -1,})
    .add({targets: introText, opacity: -1,},500)
    .add({targets: portfolioWorks, opacity: -1,},100)
    .add({targets: portfolioContact, opacity: -1,},500)
    .add({targets: background, update: function() {st.innerText = '#main::before { background-position: 0% 0%; transition-duration: 0.5s}'}},1000)
    .add({targets: [intro, portfolio], fontSize: '32px'},1000)
    .add({targets: moi, fontSize: '52px'},1000)
    .add({targets: moiText, opacity: 1,},1500)
    moi.removeEventListener("click",moiTransition);
    portfolio.removeEventListener("click",portfolioTransition);
    intro.removeEventListener("click",introTransition );
    setTimeout(()=> {
        portfolio.addEventListener("click",portfolioTransition);
        intro.addEventListener("click",introTransition );
    }, 2100);
}

//Click On Portfolio
function portfolioTransition() {
    var tl = anime.timeline({duration: 3000});
    tl
    .add({targets: introBegin, opacity: -1,})
    .add({targets: introText, opacity: -1,},500)
    .add({targets: portfolioWorks, opacity: 1,},1500)
    .add({targets: portfolioContact, opacity: 1,},1800)
    .add({targets: background, update: function() {st.innerText = '#main::before { background-position: 0% 100%; transition-duration: 0.5s}'}},1000)
    .add({targets: [intro, moi], fontSize: '32px'},1000)
    .add({targets: portfolio, fontSize: '52px'},1000)
    .add({targets: moiText, opacity: -1,},100)
    portfolio.removeEventListener("click",portfolioTransition);
    moi.removeEventListener("click",moiTransition);
    intro.removeEventListener("click",introTransition );
    setTimeout(()=> {
        moi.addEventListener("click",moiTransition);
        intro.addEventListener("click",introTransition );
    }, 2100);
}

//Click On Intro
function introTransition() {
    var tl = anime.timeline({
        duration: 3000
    });
    tl
    .add({targets: introBegin, opacity: 1,},1500)
    .add({targets: introText, opacity: 1,},1800)
    .add({targets: portfolioWorks, opacity: -1,},100)
    .add({targets: portfolioContact, opacity: -1,},500)
    .add({targets: background, update: function() {st.innerText = '#main::before { background-position: 0% 40%; transition-duration: 0.5s}'}},1000)
    .add({targets: [moi, portfolio], fontSize: '32px'},1000)
    .add({targets: intro, fontSize: '52px'},1000)
    .add({targets: moiText, opacity: -1,},100)
    portfolio.removeEventListener("click",portfolioTransition);
    moi.removeEventListener("click",moiTransition);
    intro.removeEventListener("click",introTransition );
    setTimeout(()=> {
        moi.addEventListener("click",moiTransition);
        portfolio.addEventListener("click",portfolioTransition);
    }, 2100);
}



