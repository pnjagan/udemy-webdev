function toggleDropdown(){
    let navbarToggle = document.getElementById("navbar-toggle");
    
    if(navbarToggle.className == 'navItems'){
        navbarToggle.className += ' responsive';
    }else {
        navbarToggle.className = 'navItems';
    }
    
}