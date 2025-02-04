const translations = {
    en: {
        title: "Welcome to My Website!",
        homeTitle: "Home!",
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
    // Get all elements with the data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        // Set the element's text content based on the translation key and selected language
        element.textContent = translations[lang][key] || translations[lang].title;
    });
}

// Example menu interaction code (unchanged)
document.querySelectorAll('.menu li').forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        const dropdown = menuItem.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Default language
setLanguage('en');
