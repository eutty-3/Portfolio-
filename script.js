// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }

    // Save preference in local storage
    localStorage.setItem("darkMode", body.classList.contins("dark-mode") ? "enabled" : "disabled");
});

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
} else {
    body.classList.add("light-mode");
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
});


canvas.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    particles.forEach(particle => {
        let dx = mouseX - particle.x;
        let dy = mouseY - particle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            particle.x += dx * 0.02;
            particle.y += dy * 0.02;
        }
    });
});

// Handle Window Resizing
window.addEvntListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const animationToggle = document.getElementById("disableAnimationToggle");

animationToggle.addEventListener("click", () => {
    body.classList.toggle("disable-animations");

    //change button text dynamically
    if (body.classList.contains("disable-animation")) {
        animationToggle.textContent = "Enable Animations";
    } else {
        animationToggle.textContent = "Disable Animations";
    }
});

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = 'center ${scrollPosition * 0.5}px';
});

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        card.querySelector(".card-inner").classList.toggle("flipped");
    });
});

const phrases = ["Welcome to my portfolio", "Creative web Developer", "Turning Ideas into Reality"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < phrases[index].length) {
        document.getElementById("typingEffect").textContent += phrases[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseeffect, 2000); // Wait before erasing text
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        document.getElementById("typingEffect").textContent = phrases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % phrases.length; // Move to next phrase
        setTimeout(typeEffect, 500);
    }
}

window.addEventListener("load", typeeffect);

const imagePaths = [
    "images/alex.jfif",
    "images/eutty.jfif",
    "images/dev.jfif",
    "images/wea.jfif",
    "images/eutty1.jfif",
    "images/miny.jfif",
    "images/emm.jfif",
    "images/addobe.png",
    "images/minyira.jfif",
];

const galleryContainer = document.getElementById("galleryContainer");

// Loop through images & create elements dynamically
imagePaths.forEach(src => {
    let imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.className = "gallery-image";
    imgElement.onclick = () => openLightbox(src);
    galleryContainer.appendChild(imgElement);
});

// Lightbox toggle function 
function openLightbox(imageSrc) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = '<img src="${imageSrc}" alt="gallery Image"><button onclick="closeLightbox()">Close</button>';

    document.body.appendChild(lightbox);
}

function closeLightbox() {
    document.querySelector(".lightbox").remove();
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_3ewenfi", "template_19wttz4", {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        }, "MYFu1ZfQ1xYo0641E")
        .then(response => {
            alert("Message sent successfully");
        })
        .catch(error => {
            alert("Failed to send message.");
        });
});

emailjs.init("MYFu1ZfQ1xYo0641E");

// Countdown Timer
function countdownTimer() {
    let eventDate = new Date("May 20, 2025 10:00:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getUTCMinutes();
        let timeLeft = eventDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("countdown").innerHTML = '${days}d ${hours}h ${minutes}m';

        if (timeLeft < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Event Started";
        }
    }, 1000);
}
countdownTimer();

// Event Registration Form Handling
document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("You've successfully registered for the event");
});

document.getElementById("imageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let prompt = this.prompt.value;
    let apiKey = "b6a971a9-a601-4034-83a8-e1559081b6cb";

    fetch("https://api.deepai.org/api/text2img", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "api-key": apiKey
            },
            body: JSON.stringify({ text: prompt })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("imageResult").innerHTML = '<img src="${data.output_url}" alt="Generated Image">';
        })
        .catch(error => {
            alert("Error generating image");
        });
});

document.getElementById("toggleButton").addEventListener("click", function() {
    let imageContainer = document.getElementById("imageContainer");

    //Toggle the class instead of modifying display directly
    imageContainer.classList.toggle("visible");

    if (imageContainer.classList.contains("visible")) {
        this.textContent = "Hide Generator";
    } else {
        this.textContent = "Show Generator";
    }
});

document.getElementById("showSignup").addEventListener("click", function() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
});

document.getElementById("showLogin").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
});

doocument.getElementById("toggleAuth").addEventListener("click", function() {
    window.location.href = "login.html"; //Redirects to login page
});