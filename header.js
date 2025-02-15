window.onload = function () {
    document.getElementById("header").innerHTML = `
        <header>
            <nav class="menu-container">
    <ul class="menu-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    <ul class="lan-menu">
        <li><a href="#" onclick="setLanguage('en')">English</a></li>
        <li><a href="#" onclick="setLanguage('fr')">Français</a></li>
    </ul>
</nav>

        </header>
    `;
};
