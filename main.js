window.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName");
    const userScore = localStorage.getItem("score");

    
    if (userName && userScore) {
        document.getElementById("user-name").innerText = userName;
        document.getElementById("user-score").innerText = `${userScore} pts`;
    } else {
        document.getElementById("user-name").innerText = "Guest";
        document.getElementById("user-score").innerText = "No score available";
    }
});
