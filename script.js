const message = `Happy Girlfriend Day Babee!\n\nthank you for coming into my life.\n\nYour love fills my heart with endless happiness & joy. you’re my everything.\n\nI’m so lucky to have you in my life.\n\nI love you today, tomorrow, and forever.\n\n\nFrom ur bf💕`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}



