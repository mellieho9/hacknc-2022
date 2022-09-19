function showMobileMenu() {
    var mobileNav = document.getElementById('mobile-nav');
    var hamburger = document.getElementById('hamburger');
    var badge = document.getElementById('mlh-trust-badge');
    var x = document.getElementById('hamburger-x');
    var waves = document.getElementById('waves-container');
    mobileNav.style.display = "flex";
    hamburger.style.display = "none";
    x.style.display = "inline";
    badge.style.display = "none";
    waves.style.display = "none";
}

function closeMobileMenu() {
    var mobileNav = document.getElementById('mobile-nav');
    var hamburger = document.getElementById('hamburger');
    var x = document.getElementById('hamburger-x');
    var waves = document.getElementById('waves-container');
    mobileNav.style.display = "none";
    hamburger.style.display = "inline";
    x.style.display = "none";
    badge.style.display = "none";
    waves.style.display = "inline";
}