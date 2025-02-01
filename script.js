// Language translation data
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
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('homeTitle').textContent = translations[lang].homeTitle;
    document.getElementById('homeContent').textContent = translations[lang].homeContent;
    document.getElementById('aboutTitle').textContent = translations[lang].aboutTitle;
    document.getElementById('aboutContent').textContent = translations[lang].aboutContent;
    document.getElementById('contactTitle').textContent = translations[lang].contactTitle;
    document.getElementById('nameLabel').textContent = translations[lang].nameLabel;
    document.getElementById('emailLabel').textContent = translations[lang].emailLabel;
    document.getElementById('messageLabel').textContent = translations[lang].messageLabel;
}

// Default language
setLanguage('en');
