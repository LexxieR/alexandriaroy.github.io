window.onload = function () {
    document.getElementById("header").innerHTML = `
        <header>
            <nav class="menu-container">
                <ul class="menu-list">
                    <li class="menu-item"><a href="index.html">Home</a></li>
                    <li class="menu-item"><a href="about.html">About me</a></li>
                    <li class="menu-item"><a href="#">Projects</a>
                        <ul class="dropdown menu-list">
                            <li class="menu-item"><a href="#">Professional</a></li>
                            <li class="menu-item"><a href="#">Academic</a></li>
                            <li class="menu-item"><a href="#">Personal</a></li>
                        </ul>
                    
                    </li>    
                    <li class="menu-item"><a href="contact.html">Contact</a></li>
                </ul>
                <ul class="lan-menu">
                    <li class="menu-item"><a href="#" onclick="setLanguage('en')">English</a></li>
                    <li class="menu-item" ><a href="#" onclick="setLanguage('fr')">Français</a></li>
                </ul>
            </nav>
        </header>
    `;
};
