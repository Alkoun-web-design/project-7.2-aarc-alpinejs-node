const heroSection = document.getElementById('hero');
const heroText = document.querySelector('.hero-text');
const heroSubText = document.querySelector('.hero-sub-text');
const aarcButton = document.querySelector('.join-aarc-button');
const therapyButton = document.querySelector('.seek-therapy-button');
const workshopButton = document.querySelector('.workshops-button');
const aboutAarc = document.getElementById('about-aarc');
const services = document.getElementById('services');
const workshops = document.getElementById('workshops');
const ourTeam = document.getElementById('our-team');
const gallery = document.getElementById('gallery');
const joinAarc = document.getElementById('join-aarc');
const seekTherapy = document.getElementById('seek-therapy');
const contactUs = document.querySelector('.contact-us');
const servicesCards = document.querySelectorAll('.services-card');
const navButton = document.querySelector('.dropdown-nav-button');
const ddNav = document.querySelector('.dropdown-nav');
const termsAndConditions = document.getElementById('terms-and-conditions');
const privacyPolicy = document.getElementById('privacy-policy');
const privacyPolicyButton = document.getElementById('privacy-policy-button');
const termsAndConditionsButton = document.getElementById('terms-and-conditions-button');
const fadeOut = [{opacity: 1, duration: 0},{opacity: 0, duration: 100}];
const fadeIn = [{opacity: 0, duration: 0},{opacity: 1, duration: 300}];
const iconFadeIn = [{fill: '#2a2a2a', duration: 0},{fill: '#f7f7f7', duration: 200}];
const iconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#2a2a2a', duration: 200}];
const heroTextMoveX = [{ justifySelf: 'start'},{ justifySelf: 'center'}];
const heroSubTextMoveX = [{margin: '0.5em 0 0 50%'},{margin: '0.5em 0 0 10%'}];
const pages = [heroSection, aboutAarc, services, ourTeam, gallery, workshops, joinAarc, seekTherapy, contactUs, termsAndConditions, privacyPolicy];
const seekTherapyHeroButton = document.querySelector('.seek-therapy-button');
const seekTherapyHeroButtonIcon = document.querySelector('.seek-therapy-button .hero-button-icon');
const joinAarcHeroButton = document.querySelector('.join-aarc-button');
const joinAarcHeroButtonIcon = document.querySelector('.join-aarc-button .hero-button-icon');
const workshopHeroButton = document.querySelector('.workshops-button');
const workshopHeroButtonIcon = document.querySelector('.workshops-button .hero-button-icon');
const seekTherapyHeroIconFadeIn = [{fill: '#451575', duration: 0},{fill: '#f7f7f7', duration: 200}];
const seekTherapyHeroIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#451575', duration: 200}];  
const joinAarcHeroIconFadeIn = [{fill: '#154575', duration: 0},{fill: '#f7f7f7', duration: 200}];
const joinAarcHeroIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#154575', duration: 200}];  
const workshopHeroIconFadeIn = [{fill: '#751545', duration: 0},{fill: '#f7f7f7', duration: 200}];
const workshopHeroIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#751545', duration: 200}];  

//Animation function
const animation = (targetElement, targetKeyframes, targetDelay, targetDuration, isLoop, callback) => {
  anime({
    targets: targetElement,
    keyframes: targetKeyframes, 
    delay: targetDelay,
    duration: targetDuration,
    loop: isLoop,
    easing: 'linear',
  });
  callback;
}

//Animation for the Hero Text
const heroTextAnime = (targetElement, moveX, targetDelay) => {
  anime({
    targets: targetElement,
    translateX: moveX,
    delay: targetDelay,
    easing: 'easeOutExpo',
  });
}

//Loading Animation
const loadingAnimation = (icon) => {
  anime({
    targets: icon,
    rotate: 360,
    loop: true,
    easing: 'linear',
    duration: 1000
  });
}

// Navigation Function
const showPage = function() {
  for (let page of pages) {
    let navData = this.dataset.page;
    if (page.id === navData) {
      page.classList.remove('invisible');
      animation(page, fadeIn, 0, 1000, false);
      let parent = page.querySelector('[data-div="parent"]');
        animation(parent.children, fadeIn, 300, 0, false);
    } else {
      page.classList.add('invisible');
      animation(page, fadeOut, 0, 500, false);
    }
  }  
};

document.getElementById("hero-link").addEventListener('click', showPage);
document.getElementById("about-aarc-link").addEventListener('click', showPage);
document.getElementById("services-link").addEventListener('click', showPage);
document.getElementById("our-team-link").addEventListener('click', showPage);
document.getElementById("gallery-link").addEventListener('click', showPage);
document.getElementById("workshops-link").addEventListener('click', showPage);
document.getElementById("join-aarc-link").addEventListener('click', showPage);
document.getElementById("seek-therapy-link").addEventListener('click', showPage);
document.getElementById("contact-us-link").addEventListener('click', showPage);

document.getElementById("hero-dd-link").addEventListener('click', showPage);
document.getElementById("about-aarc-dd-link").addEventListener('click', showPage);
document.getElementById("services-dd-link").addEventListener('click', showPage);
document.getElementById("our-team-dd-link").addEventListener('click', showPage);
document.getElementById("gallery-dd-link").addEventListener('click', showPage);
document.getElementById("workshops-dd-link").addEventListener('click', showPage);
document.getElementById("join-aarc-dd-link").addEventListener('click', showPage);
document.getElementById("seek-therapy-dd-link").addEventListener('click', showPage);
document.getElementById("contact-us-dd-link").addEventListener('click', showPage);

//Page Load Fade In Animation
(function(){
  let distanceX = (window.innerWidth - heroText.offsetWidth) / 2;
  heroSection.classList.remove('invisible');
  animation(heroSection, fadeIn, 0, 0, false, false);
  heroTextAnime(heroText, distanceX, 0);
  heroTextAnime(heroSubText, distanceX, 300);
  let parent = heroSection.querySelector('[data-div="parent"]');
    animation(parent.children, fadeIn, 300, 0, false);
})();

//Hero Join AARC Button for navigation
aarcButton.addEventListener('click', () => {
  for (let page of pages) {
    if (page.id === 'join-aarc'){
      page.classList.remove('invisible');
      animation(page, fadeIn, 0, 1000, false);
      let parent = page.querySelector('[data-div="parent"]');
      animation(parent.children, fadeIn, 300, 0, false);
    } else {
      page.classList.add('invisible');
      animation(page, fadeOut, 0, 500, false);
    }
  }
});

//Hero Seek Therapy Button for navigation
therapyButton.addEventListener('click', () => {
  for (let page of pages) {
    if (page.id === 'seek-therapy'){
      page.classList.remove('invisible');
      animation(page, fadeIn, 0, 1000, false);
      let parent = page.querySelector('[data-div="parent"]');
      animation(parent.children, fadeIn, 300, 0, false);
    } else {
      page.classList.add('invisible');
      animation(page, fadeOut, 0, 500, false);
    }
  }
});

//Hero Workshops Button for Navigation
workshopButton.addEventListener('click', () => {
  for (let page of pages) {
    if (page.id === 'workshops'){
      page.classList.remove('invisible');
      animation(page, fadeIn, 0, 1000, false);
      let parent = page.querySelector('[data-div="parent"]');
      animation(parent.children, fadeIn, 300, 0, false);
    } else {
      page.classList.add('invisible');
      animation(page, fadeOut, 0, 500, false);
    }
  }
});

//Privacy Policy Button
privacyPolicyButton.addEventListener('click', () => {
  for (let page of pages) {
    if (page.id === 'privacy-policy'){
      page.classList.remove('invisible');
      animation(page, fadeIn, 0, 1000, false);
      let parent = page.querySelector('[data-div="parent"]');
      animation(parent.children, fadeIn, 300, 0, false);
    } else {
      page.classList.add('invisible');
      animation(page, fadeOut, 0, 500, false);
    }
  }
});

//Terms and Conditions Button
termsAndConditionsButton.addEventListener('click', () => {
  for (let page of pages) {
    if (page.id === 'terms-and-conditions'){
      page.classList.remove('invisible');
      animation(page, fadeIn, 0, 1000, false);
      let parent = page.querySelector('[data-div="parent"]');
      animation(parent.children, fadeIn, 300, 0, false);
    } else {
      page.classList.add('invisible');
      animation(page, fadeOut, 0, 500, false);
    }
  }
});

//OpeningDropdown Navigation animation
navButton.addEventListener('click', function(){
  if([...ddNav.classList].includes('invisible')) {
    ddNav.classList.remove('invisible');
    animation(ddNav, fadeIn, 0, 0, false);
  } else if (![...ddNav.classList].includes('invisible')){
    ddNav.classList.add('invisible');
    animation(ddNav, fadeOut, 0, 0, false);
  }
});

//Closing Dropdown Navigation Menu on Click
ddNav.addEventListener('click', function(){
  animation(ddNav, fadeOut, 0, 0, false); 
  ddNav.classList.add('invisible');
});

//Menu Button Hover Effect
navButton.addEventListener('mouseenter', function(){
  animation(navButton, iconFadeIn, 0, 0, false, false);
});
navButton.addEventListener('mouseleave', function(){
  animation(navButton, iconFadeOut, 0, 0, false, false);
});

//Hero Buttons hover effect
seekTherapyHeroButton.addEventListener('mouseenter', function(){
  animation(seekTherapyHeroButtonIcon, seekTherapyHeroIconFadeIn, 0, 0, false, false);
});
seekTherapyHeroButton.addEventListener('mouseleave', function(){
  animation(seekTherapyHeroButtonIcon, seekTherapyHeroIconFadeOut, 0, 0, false, false);
});

joinAarcHeroButton.addEventListener('mouseenter', function(){
  animation(joinAarcHeroButtonIcon, joinAarcHeroIconFadeIn, 0, 0, false, false);
});
joinAarcHeroButton.addEventListener('mouseleave', function(){
  animation(joinAarcHeroButtonIcon, joinAarcHeroIconFadeOut, 0, 0, false, false);
});

workshopHeroButton.addEventListener('mouseenter', function(){
  animation(workshopHeroButtonIcon, workshopHeroIconFadeIn,0, 0, false, false);
});
workshopHeroButton.addEventListener('mouseleave', function(){
  animation(workshopHeroButtonIcon, workshopHeroIconFadeOut,0, 0, false, false);
});