window.onload = function () {
    document.getElementById("header").innerHTML = `
        <header>
            <nav class="menu-container">
                <ul class="menu-list">
                    <li class="menu-item"><a href="index.html" data-translate="homeTitle"></a></li>
                    <li class="menu-item"><a href="#about" data-translate="aboutTitle"></a></li>
                    <li class="menu-item"><a href="#projects" data-translate="projectsTitle"></a>

                    
                    </li>    
                    <li class="menu-item"><a href="#contact" data-translate="contactTitle"></a></li>
                </ul>
                <ul class="lan-menu">
                    <li class="menu-item"><a href="#" onclick="setLanguage('en')">English</a></li>
                    <li class="menu-item" ><a href="#" onclick="setLanguage('fr')">Français</a></li>
                </ul>
            </nav>
        </header>
    `;
    // Call the setLanguage function to ensure translations are applied
    setLanguage('en');  // Set default language or based on user preference
};
/*
<ul class="dropdown menu-list">
<li class="menu-item"><a href="#">Professional</a></li>
<li class="menu-item"><a href="#">Academic</a></li>
<li class="menu-item"><a href="#">Personal</a></li>
</ul>*/