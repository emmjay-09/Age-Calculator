document.getElementById("button").addEventListener("click", displayDate);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayDate();
  }
});

const current = new Date();

const currentMonth = current.getMonth();

const currentYear = current.getFullYear();

const messageBox = document.querySelector(".message");

const borderLine = document.querySelector(".bar");

function displayDate() {
  const dateSelect = document.getElementById("bar");

  const dateValue = dateSelect.value;

  const dateObject = new Date(dateValue);

  let getMonth = dateObject.getMonth();

  const emptyMonth = isNaN(getMonth);

  const monthDiff = currentMonth - getMonth;

  const getYear = dateObject.getFullYear();

  const ageValue = currentYear - getYear;

  if (currentYear < getYear && getMonth === currentMonth) {
    messageDisplay("message2");
    errorMessage();
    setTimeout(removeError, 1000);
  }
  if (getYear === currentYear && getMonth > currentMonth) {
    messageDisplay("message2");
    errorMessage();
    setTimeout(removeError, 1000);
  } else if (currentMonth < getMonth) {
    messageDisplay("message1");
  } else if (getYear === currentYear && getMonth < currentMonth) {
    messageDisplay("message5");
  } else if (getMonth < currentMonth) {
    messageDisplay("message4");
  } else if (getMonth === currentMonth && getYear === currentYear) {
    messageDisplay("message7");
    errorMessage();
    setTimeout(removeError, 2000);
  } else {
    messageDisplay("message6");
    errorMessage();
    setTimeout(removeError, 1000);
  }

  function messageDisplay(key) {
    if (key === "message1") {
      messageBox.textContent =
        "You are " +
        (ageValue - 1) +
        " year(s) and " +
        (monthDiff + 12) +
        " month(s) old.";
    } else if (key === "message2") {
      messageBox.textContent = "Invalid date";
    } else if (key === "message3") {
      messageBox.textContent = "You are a year old.";
    } else if (key === "message4") {
      messageBox.textContent =
        "You are " + ageValue + " year(s) and " + monthDiff + " month(s) old.";
    } else if (key === "message5") {
      messageBox.textContent = "You are " + monthDiff + " month(s) old.";
    } else if (key === "message6") {
      messageBox.textContent = "Please select a date";
    } else if (key === "message7") {
      messageBox.textContent = "You are less than a month old";
    }
  }
}

function checkValue(emptyMonth) {
  const test = document.getElementById("clear");

  const testing = test.addEventListener("click", () => {
    if (emptyMonth) {
      console.log("hi");
    }
  });
}

function errorMessage() {
  if (messageBox) {
    messageBox.classList.add("error");
  }
  if (borderLine) {
    borderLine.classList.add("error");
  }
}

function removeError() {
  if (messageBox) {
    messageBox.classList.remove("error");
  }
  if (borderLine) {
    borderLine.classList.remove("error");
  }
}
