// to update leaderboard
var latestScore = localStorage.getItem("score");
var latestName = localStorage.getItem("name");
var leaderScore1 = localStorage.getItem("score1");
var leaderScore2 = localStorage.getItem("score2");
var leaderScore3 = localStorage.getItem("score3");
var leaderName1 = localStorage.getItem("name1");
var leaderName2 = localStorage.getItem("name2");
var leaderName3 = localStorage.getItem("name3");
var name1Display = document.querySelector(".name1");
var name2Display = document.querySelector(".name2");
var name3Display = document.querySelector(".name3");
var score1Display = document.querySelector(".score1");
var score2Display = document.querySelector(".score2");
var score3Display = document.querySelector(".score3");



if (latestScore >= leaderScore1) {
    score1Display.textContent = latestScore + "%";
    name1Display.textContent = latestName;
    // if user obtains a new high score, this will push old ones down a line
} else if (latestScore >= leaderScore2) {
    score2Display.textContent = latestScore + "%";
    name2Display.textContent = latestName;
} else if (latestScore >= leaderScore3) {
    name3Display = latestName;
    score3Display.textContent = latestScore + "%";
}

