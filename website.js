let searching=document.querySelector("#searching");
searching.addEventListener("mouseenter", function( event ){
event.preventDefault();
console.log("works");
document.querySelector(".red-line").style.marginLeft="620px";
});
let sharing=document.querySelector("#sharing");
sharing.addEventListener("mouseenter", function( event ){
event.preventDefault();
console.log("works2");
document.querySelector(".red-line").style.marginLeft="800px";
});
let bookmarking=document.querySelector("#bookmarking");
bookmarking.addEventListener("mouseenter", function( event ){
event.preventDefault();
console.log("works2");
document.querySelector(".red-line").style.marginLeft="425px";
});

let iconarrow=document.querySelectorAll(".icon-arrow");
iconarrow.forEach(image => {
    image.addEventListener("mouseover", function( event ){
        event.preventDefault();
        console.log("works2");
        image.innerHTML="<span class='esri-icon-up:before' aria-label='close icon' color='red'></span>"
})
    
});
let boutton = document.querySelector("#boutton");
boutton.addEventListener("click", ()=>{
    console.log("error");
document.querySelector("#info").innerHTML +="Organize your bookmarks however you like .Our simple drag-and-drop interface gives you compelte control over how you manage your favourite sites loremloremlorem Organize your bookmarks however you like .Our simple drag-and-drop interface gives you compelte control over how you manage your favourite sites loremloremlorem"});

let click=document.querySelector("#click");
click.addEventListener("click", ()=>{
    let mail=document.querySelector("#email");
    let email = String(document.querySelector("#email").value)
    let s = email.indexOf(".com");
    if (email.length == 0) {
        document.querySelector("#email-error").innerHTML = "Woops, you should provide your email "
        mail.style.border = "3px solid var(--soft-red)";
        mail.style.backgroundImage= "url(images/icon-error.svg)";
        document.querySelector(".error-space").style.backgroundColor="var(--soft-red)"

    }
    else {
        let x = 0
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) != '@') {
                x = 1
            }
        }
        if (s == -1) {

            document.querySelector("#email-error").innerHTML = " Woops, Make sure it's an email "
            mail.style.border = "3px solid var(--soft-red)";
            mail.style.backgroundImage= "url(images/icon-error.svg)";
            document.querySelector(".error-space").style.backgroundColor="var(--soft-red)"

        }
         else if (x = 1) {
            document.querySelector("#email-error").innerHTML = " @ manquant :votre email doit contenir un @  "
            mail.style.border = "3px solid var(--soft-red)";
            mail.style.backgroundImage= "url(images/icon-error.svg)";
            document.querySelector(".error-space").style.backgroundColor="var(--soft-red)"

        }
    }
})