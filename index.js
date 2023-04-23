const email = document.getElementById("email_id");
const error = document.getElementById("green_red_div");
const buttonSubmit = document.getElementById("btn");

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input, errorPara) {
    if (mailRegex.test(input.value)) {
        console.log("this is true");
        errorPara.firstElementChild.style.display = "block";
        errorPara.lastElementChild.style.display = "none";
    } else if (!mailRegex.test(input.value)) {
        console.log('this is false');
        errorPara.firstElementChild.style.display = "none";
        errorPara.lastElementChild.style.display = "block";
    }
}


buttonSubmit.addEventListener('click', (Event)=> {
    Event.preventDefault();
    testMail(email, error);
    console.log("clicked");
})