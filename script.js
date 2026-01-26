const message = document.getElementById("message");
const next = document.getElementById("next");

const messages = ["えいた、、、", "あいつは、、、", "がちで、、、","やばい、、、"];

let index = 0;

next.addEventListener("click", () => {
  index = index + 1;

  if (index >= messages.length) {
    index = 0;
  }

  message.textContent = messages[index];
});

