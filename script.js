const translations = {
    en: {
        title: "Hi, I'm Lexxie!",
        homeTitle: "Home",
        homeContent: "This is a simple website to demonstrate basic web development skills using HTML, CSS, and JavaScript.",
        welcomeContent: "Welcome to my web portfolio! My name is Alexandria Roy but I go by Lexxie, this is a website I created to demonstrate some basic web development skills using HTML, CSS, and JavaScript. This site also serves as a place where I can introduce myself and share some of the projects I have worked on through my web journey.",
        introContent: "I’m a problem-solver with a background in physics and a passion for programming and web development. I love building intuitive, efficient digital experiences and have hands-on experience with front-end technologies.",
        welcomeBtn: "Learn More",
        aboutTitle: "About Me",
        aboutContent: "Although my academic background is in physics, I’ve developed a strong passion in web development while working at McMaster University on the Science Departmental website. Through professional and personal projects, I’ve gained hands-on experience in front-end development. My analytical mindset allows me to approach coding challenges with a structured and creative problem-solving approach.",
        aboutBtn: "Learn More About My Projects",
        skillsTitle: "Skills",
        resumeBtn: "Check out my resume",
        projectsTitle: "Projects",
        projectsContent: "Here are selection of projects I’ve created or supported.",
        projectsChemTitle: "Science Homepage Redesign",
        projectsChemContent: "During the summer of 2023, I played a key role in the redesign of the departmental websites, maintaining brand consistency across each website and adding new features to improve usability.",
        projectsPenTitle: "Double Pendulum Model in C++",
        projectsPenContent: "As a final project for the scientific computing course at McMaster University, I developed a model of a double pendulum system in C++ using the Runge-Kutta method to solve the ordinary differential equations involved.",
        projectsWordPressTitle: "WordPress Custom Theme",
        projectsWordPressContent: "This is a presonal project that I am working on the further develope my WordPress skills by learning to right in php and build a costum theme for a recipe management site",
        contactTitle: "Contact",
        nameLabel: "Name:",
        namePlaceholder:"Your Name",
        emailLabel: "Email:",
        emailPlaceholder: "Your Email",
        messageLabel: "Message:",
        messagePlaceholder:"Your Message",
        submitBtn: "Submit",
        footer: "Alexandria Roy, All Rights Reserved"
        
    },
    fr: {
        title: "Salut, je suis Alexandria",
        homeTitle: "Accueil",
        homeContent: "Ceci est un site web simple pour démontrer des compétences de base en développement Web.",
        welcomeContent: "Bienvenue a mon site web de portefeuille! Je m'appelle Alexandria Roy, ou Lexxie comme surnom. J'ai créé ce site web comme démonstration de mes compétence en développement web en utilisent HTML, CSS et Javascript. Ce site web aussi sert comme un espace où je peux me présenter et partager les projet auxquel j'ai contribué ou que j'ai créés au cours de mon parcours dans le développement web.",
        oldwelcomeContent: "Je suis une personne qui résout les problèmes, avec une formation en physique et une passion pour la programmation et le développement web. J'adore créer des expériences intuitives et j’ai de l’expérience pratique avec les technologies front-end.",
        welcomeBtn: "En savoir plus",
        aboutTitle: "À propos de moi",
        aboutContent: "Tandis que mon éducation est en physique, j'ai développé une grande passion pour le développement web en travaillant à l’Université McMaster sur le site du département des sciences. En travaillant sur mes projets professionnels et personnels, j’ai acquis de l’expérience concrète en développement front-end. Mon esprit analytique me permet d’aborder les défis de programmation avec une approche structurée et créative de la résolution de problèmes.",
        aboutBtn: "Découvrir mes projets",
        skillsTitle: "Compétences",
        resumeBtn: "Consulter mon CV",
        projectsTitle: "Projets",
        projectsContent: "Voici une sélection de projets que j’ai créés ou auxquels j’ai contribué.",
        projectsChemTitle: "Refonte de la page d'accueil Sciences",
        projectsChemContent: "Au cours de l'été 2023, j'ai occupé un rôle central dans la refonte des sites web départementaux, en assurant une cohérence visuelle à travers tous les sites et en intégrant de nouvelles fonctionnalités pour optimiser l'expérience utilisateur.",    
        projectsPenTitle: "Modèle de pendule double en C++",
        projectsPenContent: "Comme projet final du cours 'Scientific Computing' à l’Université McMaster, j'ai développé un modèle d'un système de pendule double en C++, en utilisant la méthode de Runge-Kutta pour résoudre les équations différentielles ordinaires associées.",    
        nameLabel: "Nom:",
        namePlaceholder:"Voter Nom",
        emailLabel: "Courriel:",
        emailPlaceholder: "Votre Courriel",
        messageLabel: "Message:",
        messagePlaceholder:"Votre Message",
        submitBtn: "Soumettre",
        footer: "Alexandria Roy, Tous droits réservés."
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
    // Update placeholders
    const nameInput = document.getElementById("name");
    if(nameInput) nameInput.placeholder = translations[lang].namePlaceholder;

    const emailInput = document.getElementById("email");
    if(emailInput) emailInput.placeholder = translations[lang].emailPlaceholder;

    const messageInput = document.getElementById("message");
    if(messageInput) messageInput.placeholder = translations[lang].messagePlaceholder;
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
