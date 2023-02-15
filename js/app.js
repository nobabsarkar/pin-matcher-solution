function getPin() {
  const pin = genaratePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    // console.log("pin not 3 digit found", pin);
    return getPin();
  }
}

function genaratePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();

  // display pin
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNuberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNuberField.value;
    if (isNaN(number)) {
      if (number === "C") {
        typedNuberField.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNuberField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNuberField.value = newTypedNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPIn = displayPinField.value;

  const typedNuberField = document.getElementById("typed-numbers");
  const typedNumber = typedNuberField.value;

  const pinSuccessMessage = document.getElementById("pin-success");
  const pinFailureMessage = document.getElementById("pin-failure");

  if (typedNumber === currentPIn) {
    pinSuccessMessage.style.display = "block";
    pinFailureMessage.style.display = "none";
  } else {
    pinFailureMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
  }
});
