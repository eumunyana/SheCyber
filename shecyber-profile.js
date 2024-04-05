const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(profileForm);
  const profileImageInput = document.getElementById("profile-image-input");
  const profileBioInput = document.getElementById("profile-bio-input");

  // Send a request to the server to update the user's profile information
  fetch("/api/profile", {
    method: "PUT",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Update the user's profile image and bio on the page
      const profileImage = document.querySelector(".profile-image");
      profileImage.src = data.profileImage;
      const profileBio = document.querySelector(".profile-bio");
      profileBio.textContent = data.profileBio;
    })
    .catch((error) => {
      console.error(error);
    });
});

const logOutButton = document.querySelector(".log-out-button");

logOutButton.addEventListener("click", () => {
  // Send a request to the server to log the user out
  fetch("/api/logout", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      // Redirect the user to the sign in page
      window.location.href = "sign-in-page.html";
    })
    .catch((error) => {
      console.error(error);
    });
});