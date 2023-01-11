const randomButton = document.getElementById("randomButton");
const userButton = document.getElementById("userButton");
const robotImage = document.getElementById("robotImage");

const userInput = document.getElementById("user-input");
let robotString = "https://www.robohash.org/";

const randomGeneratedRobot = () => {
  let randomNumber = Math.floor(Math.random() * 1000);
  robotImage.src = robotString + randomNumber + "?size=500x500";
};

const userGeneratedRobot = () => {
  if (userInput.value === "") {
    Swal.fire({
      icon: "error",
      title: "Hey McFly!",
      text: `Listen Genius, you need to enter some text before clicking the large pretty button. 😕`,
      footer: '<img src="https://www.robohash.org/duh?size=100x100"/>',
    });
    userInput.focus();
  } else {
    robotImage.src = robotString + userInput.value + "?size=500x500";
  }
};

randomButton.addEventListener("click", randomGeneratedRobot);
userButton.addEventListener("click", userGeneratedRobot);
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    userGeneratedRobot();
  }
});
