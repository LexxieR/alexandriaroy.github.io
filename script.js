const translations = {
    en: {
        title: "Hi, I'm Alexandria",
        homeTitle: "Home",
        homeContent: "This is a simple website to demonstrate basic web development skills using HTML, CSS, and JavaScript.",
        welcomeContent: "I’m a problem-solver with a background in physics and a passion for programming and web development. I love building intuitive, efficient digital experiences and have hands-on experience with front-end technologies.",
        aboutTitle: "About",
        aboutContent: "Although my academic background is in physics, I’ve developed a strong passion in web development while working at McMaster Universty on the Science Departmental website. Through professional and personal projects, I’ve gained hands-on experience in front-end development. My analytical mindset allows me to approach coding challenges with a structured and creative problem-solving approach.",
        skillsTitle: "Skills",
        skillsContent: "",
        contactTitle: "Contact",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:"
    },
    fr: {
        title: "Bienvenue sur Mon Site Web",
        homeTitle: "Accueil",
        homeContent: "Ceci est un site Web simple pour démontrer des compétences de base en développement Web.",
        welcomeContent: "Hi, I’m Lexxie, a passionate aspiring developer with a strong foundation in problem-solving.",
        aboutTitle: "À propos",
        aboutContent: "Ce site Web a été créé à partir de zéro en utilisant des technologies Web de base.",
        skillsTitle: "Compétences",
        homeContent: "Ceci est un site Web simple pour démontrer des compétences de base en développement Web.",
        contactTitle: "Contact",
        nameLabel: "Nom:",
        emailLabel: "E-mail:",
        messageLabel: "Message:"
    }
};

// Function to set the language
function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); 
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key] || translations["en"][key];
    });

    // Highlight the selected language
    document.querySelectorAll('.languages a').forEach(link => {
        link.classList.remove("active"); // Remove highlight from all
        if (link.textContent.toLowerCase().includes(lang)) {
            link.classList.add("active"); // Highlight selected
        }
    });
}


// Function to load the saved language on page load
function loadLanguage() {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to English if not set
    setLanguage(savedLanguage);
}

function showLoadingScreen() {
    // Show the loading screen
    document.getElementById('loading-screen').style.display = 'flex';
}


// Run on page load to apply the saved language
document.addEventListener("DOMContentLoaded", loadLanguage);
