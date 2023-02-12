function handleSubmit(e) {
  e.preventDefault();
  //URL provided by the user
  let userInput = document.getElementById("url").value;
  //Check if the URL provided by the user is valid or not
  if (Client.checkURL(userInput)) {
    fetch("http://localhost:8081/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: userInput }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById(
          "polarity"
        ).innerHTML = `Polarity:  ${res.polarity}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
      });
  } else {
    alert("The URL provided is not valid, please enter a new URL.");
    console.log("error", error);
  }
}

export { handleSubmit };
