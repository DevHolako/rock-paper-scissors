const game = () => {
  let pscore = 0;
  let cscore = 0;
  //start the game
  const statrGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const palyMatch = () => {
    const options = document.querySelectorAll(".option button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // Computer options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);
        setTimeout(() => {
          // call the compaer hands fun
          compareHands(this.textContent, computerChoice);
          //updating the img
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updatescore = () => {
    const playerScore = document.querySelector(".player-score p ");
    const computerScore = document.querySelector(".computer-score p ");
    playerScore.textContent = pscore;
    computerScore.textContent = cscore;
  };
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // checking for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pscore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cscore++;
        updatescore();
        return;
      }
    }
    // checking for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins";
        pscore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cscore++;
        updatescore();
        return;
      }
    }
    // checking for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins";
        pscore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cscore++;
        updatescore();
        return;
      }
    }
  };
  //call inner functions
  statrGame();
  palyMatch();
};

// start the game func
game();
