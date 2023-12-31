var username = document.getElementById('pxyinput').value;
let scores = [{
    name: "Player 1",
    score: 300
  },
  {
    name: "Player 2",
    score: 370
  },
  {
    name: "Player 3",
    score: 500
  },
  {
    name: "Player 4",
    score: 430
  },
  {
    name: "Player 5",
    score: 340
  },
];

function updateLeaderboardView() {
  let leaderboard = document.getElementById("leaderboard").getElementsByTagName("tbody")[0];
  leaderboard.innerHTML = "";

  scores.sort(function(a, b) {
    return b.score - a.score;
  });

  let colors = ["gold", "silver", "#cd7f32"];

  for (let i = 0; i < scores.length; i++) {
    let rank = document.createElement("td");
    let name = document.createElement("td");
    let score = document.createElement("td");

    rank.innerText = i + 1; // rank starts from 1
    name.innerText = scores[i].name;
    score.innerText = scores[i].score;

    let scoreRow = document.createElement("tr");
    if (i < 3) { // apply color for top 3 ranks
      scoreRow.style.color = colors[i];
    }

    scoreRow.appendChild(rank);
    scoreRow.appendChild(name);
    scoreRow.appendChild(score);
    leaderboard.appendChild(scoreRow);
  }
//} unnesessary "}"
//  let colors = ["gold", "silver", "#cd7f32"];  unnesessary too, already defined
//  for (let i = 0; i < 3; i++) {
//    elements[i].style.color = colors[i];
//  }
}

updateLeaderboardView();

function randomize() {
  for (var i = 0; i < scores.length; i++) {
    scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  }
  // when your data changes, call updateLeaderboardView
  updateLeaderboardView();
}
