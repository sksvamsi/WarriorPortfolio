function changeAboutMeText() {
  const aboutMeTexts = [
    "Tech Enthusiast",
    "Data Scientist",
    "Full Stack Web Developer",
  ]; // Add more texts as needed
  const typingSpeed = 100; // milliseconds per character
  const eraseSpeed = 50; // milliseconds per character during erasing
  const pauseTime = 1500; // milliseconds to pause between each text change
  const aboutMeElement = document.querySelector(".about-me");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = aboutMeTexts[textIndex];
    /* Typing */
    if (!isDeleting && charIndex < currentText.length) {
      aboutMeElement.textContent += currentText[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
    /* Erasing */
      aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, eraseSpeed);
    } else {
    /* Switching the deleting or Typing process */
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % aboutMeTexts.length;
      }
      setTimeout(type, pauseTime);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentMode = body.classList.contains("dark-mode") ? "Dark" : "Light";
    darkModeToggle.querySelector("i").classList.toggle("fa-sun"); // Change icon
    darkModeToggle.querySelector("i").classList.toggle("fa-moon"); // Change icon
    darkModeToggle.querySelector("i").classList.toggle("light-mode"); // Change icon color
  });
});

changeAboutMeText();

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector(".progress-bar");
        const progress = progressBar.dataset.progress;

        progressBar.style.setProperty("--progress", `${progress}%`); // Set custom property for progress
        progressBar.classList.add("animated"); // Add a class to trigger animation
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  });

  const programmingLanguages = document.querySelectorAll(
    "#programming-languages .skill"
  );
  programmingLanguages.forEach((skill) => {
    observer.observe(skill);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

/* ------------------------------- MODAL SCRIPTS - PROJECTS POPUP ------------------------------------- */

document.querySelectorAll(".btn-know-more").forEach((button) => {
  button.addEventListener("click", (event) => {
    const modal = document.createElement("div");
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">×</span>
                <h2>Project Title</h2>
                <p>Project description...</p>
                <!-- Add more content here -->
            </div>
        `;
    modal.className = "modal";
    document.body.appendChild(modal);

    // Show the modal
    modal.style.display = "block";

    // Close the modal
    modal.querySelector(".close-button").addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});
