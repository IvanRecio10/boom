document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const countdownElement = document.getElementById('countdown');
    const resultElement = document.getElementById('result');
    const restartButton = document.getElementById('restart');
  
    let randomNumber;
    let countdown;
    let isGameRunning = false;
  
    userInput.addEventListener('change', startGame);
    userInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        startGame();
      }
    });
  
    function startGame() {
      const userNumber = parseInt(userInput.value);
  
      if (isNaN(userNumber) || userNumber < 1 || userNumber > 3) {
        resultElement.innerText = 'Introduce un número válido entre 1 y 3.';
        return;
      }
  
      if (isGameRunning) {
        return;
      }
  
      isGameRunning = true;
      resultElement.innerText = ''; 
      countdownElement.innerText = '5'; 
  
      randomNumber = Math.floor(Math.random() * 3) + 1;
      
      let timeLeft = 5;
      countdown = setInterval(() => {
        timeLeft--;
        countdownElement.innerText = timeLeft;
  
        if (timeLeft === 0) {
          clearInterval(countdown);
          evaluateResult(userNumber);
        }
      }, 1000);
    }
  
    function evaluateResult(userNumber) {
      if (userNumber === randomNumber) {
        resultElement.innerText = `¡Has salvado el mundo! Elegiste ${userNumber}, el número correcto era ${randomNumber}.`;
      } else {
        resultElement.innerText = `La bomba ha estallado. Elegiste ${userNumber}, pero el número correcto era ${randomNumber}.`;
      }
  
      isGameRunning = false; 
    }
      
    restartButton.addEventListener('click', resetGame);
  
    function resetGame() {
      countdownElement.innerText = ''; 
      resultElement.innerText = ''; 
      userInput.value = ''; 
      isGameRunning = false; 
    }
  });
  