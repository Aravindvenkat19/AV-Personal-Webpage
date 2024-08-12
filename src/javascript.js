const toggleBtn = document.getElementById("toggle-button")
const closeBtn = document.getElementById("close-button")
const navbarCon = document.getElementById("NavbarId")
const CvButton = document.querySelector("#cv-button")
const themeClick = document.getElementById("dark-img-btn")
const imgbtn = document.getElementById("switch-theme")
const footerTheme = document.getElementById("foot-sec")
const imgtheme = document.getElementById("proj-img")
const worktheme = document.getElementById("work-desc")
const abtsecres = document.getElementById("about-sec")
const img2theme = document.querySelector(".proj-img-pos")
const wrk2theme = document.querySelector(".work-desc-pos")
const imgrepo = document.getElementById("imgid2")
const imgrepo1 = document.getElementById("imgid1")
const navlinks = document.querySelectorAll(".nav-link")
const switheme = document.getElementById("dark-img-btn")
const img1div = document.querySelector(".works-pos")
const img1color =  img1div.querySelector("#proj-img")
const navhead = document.querySelector(".navbar")
const navbrand = navhead.querySelector(".navbar-brand")

//Copy Functionality  
const copyButtons = document.querySelectorAll(".copyButton")



// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'dark') {
        document.body.classList.remove('light-mode');
        footerTheme.classList.add('foot-click')
        imgtheme.classList.add('img-bgcolor')
        worktheme.classList.add('workdiv-color')
        abtsecres.classList.add('abt-sec-aft')
        imgrepo.classList.add('img-repo')
        imgrepo1.classList.add('img-repo1')
        img2theme.classList.add('img2-bgcolor')
        wrk2theme.classList.add('work-div2')
        navlinks.forEach(link => link.classList.add('nav-dis')); 
        switheme.classList.add('span-dis')
        CvButton.classList.add('downbtn-theme')
        img1color.classList.add('img1-bgcolor')
        navbrand.classList.add('nav-style')
    }
    else {
        document.body.classList.add('light-mode');
        footerTheme.classList.remove('foot-click')
        imgtheme.classList.remove('img-bgcolor')
        worktheme.classList.remove('workdiv-color')
        abtsecres.classList.remove('abt-sec-aft')
        imgrepo.classList.remove('img-repo')
        imgrepo1.classList.remove('img-repo1')
        img2theme.classList.remove('img2-bgcolor')
        wrk2theme.classList.remove('work-div2')
        navlinks.forEach(link => link.classList.remove('nav-dis'));
        switheme.classList.remove('span-dis')
        CvButton.classList.remove('downbtn-theme')
        img1color.classList.remove('img1-bgcolor')
        navbrand.classList.remove('nav-style')
        
        
    }
});

// Toggle theme
themeClick.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('light-mode');

    if(isDarkMode) {
        footerTheme.classList.remove('foot-click')
        imgtheme.classList.add('img-bgcolor')
        worktheme.classList.add('workdiv-color')
        abtsecres.classList.add('abt-sec-aft')
        imgrepo.classList.add('img-repo')
        imgrepo1.classList.add('img-repo1')
        img2theme.classList.add('img2-bgcolor')
        wrk2theme.classList.add('work-div2')
        navlinks.forEach(link => link.classList.add('nav-dis'));
        switheme.classList.add('span-dis')
        CvButton.classList.add('downbtn-theme')
        img1color.classList.add('img1-bgcolor')
        navbrand.classList.add('nav-style')
    }
    else{
        footerTheme.classList.add('foot-click')
        imgtheme.classList.remove('img-bgcolor')
        worktheme.classList.remove('workdiv-color')
        abtsecres.classList.remove('abt-sec-aft')
        imgrepo.classList.remove('img-repo')
        imgrepo1.classList.remove('img-repo1')
        img2theme.classList.remove('img2-bgcolor')
        wrk2theme.classList.remove('work-div2')
        navlinks.forEach(link => link.classList.remove('nav-dis'));
        switheme.classList.remove('span-dis')
        CvButton.classList.remove('downbtn-theme')
        img1color.classList.remove('img1-bgcolor')
        navbrand.classList.remove('nav-style')
    }

    console.log('Is dark mode:', !isDarkMode); 
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
});

toggleBtn.addEventListener('click', () => {
    navbarCon.classList.add('show')
    toggleBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    themeClick.classList.toggle('span')
    console.log('CvButton class list:', CvButton.classList);

});

closeBtn.addEventListener('click', () => {
    navbarCon.classList.remove('show')
    toggleBtn.style.display = 'block'
    closeBtn.style.display = 'none'
    themeClick.classList.toggle('span')
    console.log('CvButton class list:', CvButton.classList);
})

//copy Button Function
copyButtons.forEach(button => {

    button.addEventListener('click', function() {
        const textId = this.getAttribute("data-text-id");   
        const textToCopy = document.getElementById(textId).textContent;
        const temptextArea = document.createElement("textarea");


        temptextArea.value = textToCopy;
        document.body.appendChild(temptextArea);
        temptextArea.select();
        document.execCommand("copy");
        document.body.removeChild(temptextArea);


        const confirmation = document.getElementById("copyConfirmation");
        confirmation.classList.remove("hidden")

        setTimeout(() => {
            confirmation.classList.add("hidden")
        }, 2000);

    });
});


