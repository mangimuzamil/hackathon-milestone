const button = document.getElementById("toggle-skills") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLButtonElement;

button.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
});
