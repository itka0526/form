import "./style.css";
const NUMBER_OF_QUESTIONS = 6;
const NUMBER_OF_QUESTIONS_TO_PASS = 5;
const ANSWERS = ["hello_world", "zero_and_one", ".py", "print", "1024**2*8", "yesmaybe"];

document.getElementById("finish").addEventListener("click", finish);

if (localStorage.getItem("complete") == "yes") {
    replaceForm();
}

function finish() {
    let correctlyAnswered = [];
    for (let i = 1; i < NUMBER_OF_QUESTIONS + 1; i++) {
        const element = document.getElementById(i + "-input");
        for (let ca of ANSWERS) if (ca.includes(element.value)) correctlyAnswered.push(element.value);
    }
    if (correctlyAnswered.length >= NUMBER_OF_QUESTIONS_TO_PASS) {
        replaceForm();
        localStorage.setItem("complete", "yes");
    }
}

function replaceForm() {
    const form = document.getElementById("main-form");
    const formComplete = document.createElement("h1");

    formComplete.textContent = "Сайн байна уу! Та энэ telegram хаяг руу ";
    formComplete.style = "text-align: center;";

    formComplete.innerHTML = `
        Энэ телеграм хаяг руу ороорой.
        </br>
        <a href="https://t.me/+9HcoNTUb2RRkYmIy">https://t.me/+9HcoNTUb2RRkYmIy</a>
       `;

    form.replaceChildren(formComplete);
}
