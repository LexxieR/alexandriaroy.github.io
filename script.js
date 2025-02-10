const translations = {
    en: {
        title: "Welcome to My Website!",
        homeTitle: "Home",
        homeContent: "This is a simple website to demonstrate basic web development skills using HTML, CSS, and JavaScript.",
        aboutTitle: "About",
        aboutContent: "This website was created from scratch using core web technologies.",
        contactTitle: "Contact Us",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:"
    },
    fr: {
        title: "Bienvenue sur Mon Site Web",
        homeTitle: "Accueil",
        homeContent: "Ceci est un site Web simple pour démontrer des compétences de base en développement Web.",
        aboutTitle: "À propos",
        aboutContent: "Ce site Web a été créé à partir de zéro en utilisant des technologies Web de base.",
        contactTitle: "Contactez-nous",
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

// Run on page load to apply the saved language
document.addEventListener("DOMContentLoaded", loadLanguage);
