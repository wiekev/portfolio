let nu  = document.querySelector("main section:first-of-type article:first-of-type")
let textnu = document.querySelector("main section:nth-of-type(2) article:nth-of-type(1)")
let japanner = document.querySelector("main section:first-of-type article:nth-of-type(2)")
let textJapanner = document.querySelector("main section:nth-of-type(2) article:nth-of-type(2)")
let hva = document.querySelector("main section:first-of-type article:nth-of-type(3)")
let texthva = document.querySelector("main section:nth-of-type(2) article:nth-of-type(3")
let cmd = document.querySelector("main section:first-of-type article:nth-of-type(4)")
let textcmd = document.querySelector("main section:nth-of-type(2) article:nth-of-type(4)")
let pieternieuwland = document.querySelector("main section:first-of-type article:nth-of-type(5)")
let textPieternieuwland = document.querySelector("main section:nth-of-type(2) article:nth-of-type(5)")
let minor = document.querySelector("main section:first-of-type article:nth-of-type(6)")
let textminor = document.querySelector("main section:nth-of-type(2) article:nth-of-type(6)")
let vroeger = document.querySelector("main section:first-of-type article:nth-of-type(7)")
let textvroeger = document.querySelector("main section:nth-of-type(2) article:nth-of-type(7)")


function textPNCZichbaar() {
    textPieternieuwland.style.display = "block";
}

function textPNCOntzichbaar() {
    textPieternieuwland.style.display = "none";
}

pieternieuwland.onmouseover = textPNCZichbaar;
pieternieuwland.onmouseout = textPNCOntzichbaar;




function textNuZichbaar() {
    textnu.style.display = "block";
}

function textNuOntzichbaar() {
    textnu.style.display = "none";
}

nu.onmouseover = textNuZichbaar;
nu.onmouseout = textNuOntzichbaar;


function textVroegerZichbaar() {
    textvroeger.style.display = "block";
}

function textVroegerOntzichbaar() {
    textvroeger.style.display = "none";
}

vroeger.onmouseover = textVroegerZichbaar;
vroeger.onmouseout = textVroegerOntzichbaar;



function textJAPZichtbaar() {
    textJapanner.style.display = "block";
}

function textJAPOntzichtbaar() {
    textJapanner.style.display = "none";
}

japanner.onmouseover = textJAPZichtbaar;
japanner.onmouseout = textJAPOntzichtbaar;



function textHVAZichtbaar() {
    texthva.style.display = "block";
}

function textHVAOntzichtbaar() {
    texthva.style.display = "none";
}

hva.onmouseover = textHVAZichtbaar;
hva.onmouseout = textHVAOntzichtbaar;



function textCMDZichtbaar() {
    textcmd.style.display = "block";
}

function textCMDOntzichtbaar() {
    textcmd.style.display = "none";
}

cmd.onmouseover = textCMDZichtbaar;
cmd.onmouseout = textCMDOntzichtbaar;



function textminorZichtbaar() {
    textminor.style.display = "block";
}

function textminorOntzichtbaar() {
    textminor.style.display = "none";
}

minor.onmouseover = textminorZichtbaar;
minor.onmouseout = textminorOntzichtbaar;
