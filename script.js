function checkScore() {
    var score = document.getElementById("score").value;
    score = parseInt(score);
    var result = document.getElementById("result");
    var dialog = document.getElementById("resultDialog");

    if (score >= 0 && score <= 20) {
        const { message, color } = score === 20 ?
            { message: "Perfect Score!", color: "green" } :
            score >= 15 ?
                { message: "You Passed!", color: "blue" } :
                { message: "You Failed!", color: "red" };

        result.innerText = `Your Score: ${score} = ${message}`;
        result.style.color = color;
        dialog.showModal();
    } else {
        result.innerText = `Your Score: ${score} = Invalid Score! Score must be between 0 and 20...`;
        result.style.color = "red";
        dialog.showModal();
    }
}

function closeDialog() {
    var dialog = document.getElementById("resultDialog");
    dialog.close();
}