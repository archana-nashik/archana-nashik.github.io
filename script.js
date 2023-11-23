function checkAnswer(answer) {
    const correctAnswer = "Paris";
    const feedbackElement = document.getElementById("feedback");

    if (answer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.classList.add("correct");
    } else {
        feedbackElement.textContent = "Incorrect. The correct answer is " + correctAnswer;
        feedbackElement.classList.add("incorrect");
    }
}
