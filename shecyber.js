const header = document.getElementById("header-container");
const headerHeight = header.offsetHeight;
const home = document.getElementById("home");
const homeText = document.querySelector("#home p");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.paddingTop = `${window.scrollY}px`;
    header.style.paddingBottom = `${headerHeight - window.scrollY}px`;
    header.style.backgroundColor = "white";
    homeText.style.color = "black";
  } else {
    header.style.paddingTop = "0";
    header.style.paddingBottom = `${headerHeight}px`;
    header.style.backgroundColor = "rgba(0, 0, 19, 0.5)";
    homeText.style.color = "white";
  }
});

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const scale = 1 + (Math.sin(Date.now() / 1000) + 1) / 2;
  homeText.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
});

document.addEventListener("mouseout", () => {
  homeText.style.transform = "translate(0, 0) scale(1)";
});

const signInButtons = document.querySelectorAll('.sign-in-button');

signInButtons.forEach((button) => {
  button.addEventListener('click', () => {
    handleSignIn();
  });
});

function handleSignIn() {
  // Handle sign-in/sign-up logic here
}


// Dark mode toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    body.classList.add('dark');
    body.classList.remove('light');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
});