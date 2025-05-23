/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
  
    if(toggle && nav){
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  }
  showMenu('nav-toggle','nav-menu');
  
  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link');
  
  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));
  
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]');
  
  const scrollActive = () => {
    const scrollDown = window.scrollY;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false // true if you want animations to repeat every scroll
  });
  
  // Home section
  sr.reveal('.home__data', {});
  sr.reveal('.home__social-icon', { interval: 200 });
  sr.reveal('.home__img', { delay: 400 });
  
  // About section
  sr.reveal('.about__img', { origin: 'left', delay: 200 });
  sr.reveal('.about__subtitle', { delay: 300 });
  sr.reveal('.about__text', { delay: 400 });
  
  // Skills section
  sr.reveal('.skills__container', { delay: 200 });
  sr.reveal('.skills__data', { interval: 100 });
  
  // Work section
  sr.reveal('.work__img', { interval: 200 });
  
  // Certifications section
  sr.reveal('.certifications__content', { interval: 200 });
  
  // Contact section
  sr.reveal('.contact__form', { delay: 300 });
  