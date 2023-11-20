const input = document.querySelector("input");
const button = document.querySelector("button");

// input.addEventListener("keydown", () => {
//   console.log("tombol ditekan");
// });
// input.addEventListener("keyup", () => {
//   console.log("tombol dirilis");
// });

input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Enter":
      window.location = "app.html";
      break;
  }
});

button.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    window.location = "app.html";
  }
});
