let newparagraph = document.createElement("p");
newparagraph.textContent = "this is a new paragraph created by js";
console.dir(newparagraph);

let conatainer = document.getElementById("content");
conatainer.appendChild(newparagraph);

let rev = document.querySelector("#content p");
rev.remove();

// this is alternate method to create the element by using inner html
document.querySelector("#content p").remove();

let image = document.createElement("img");
image.setAttribute("src","https://mycareersview.com/afile/mcv23096_5vfile_krmu.jpg");

image.setAttribute("alt","K.R. Mangalam University");

let gallery = document.getElementById("gallery");
gallery.appendChild(image);

// date method 

let date = new Date();
console.dir(date);

setInterval(()=>{
    let date = new Date();
    console.dir(date);

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let clock = document.getElementById("clock");
    clock.textContent = `${hour} : ${minute} : ${second}`;
},1000);