const form = document.getElementById("forminput");
const textinput = document.getElementById("myinput");
const courseinput = document.getElementById("course");
const output = document.getElementById("output") ;

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const name = textinput.value 
    const course = courseinput.value
    console.log(name);

    output.innerText = name + " "+course

})