// const fadeOut = [{opacity: 1, duration: 0},{opacity: 0, duration: 100}];
// const iconFadeIn = [{fill: '#2a2a2a', duration: 0},{fill: '#f7f7f7', duration: 200}];
// const iconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#2a2a2a', duration: 200}];

// sectionJoinAarcButton.addEventListener('click', () => {
//   seekTherapyDialog.showModal();
// })

const qualificationsInput = document.getElementById('interest-qualifications');
const contactUsForm = document.getElementById('contact-us-form');
const contactUsButton = document.getElementById('contact-us-button');
const contactUsSendicon = document.getElementById('contact-us-send-icon');
const interestButton = document.getElementById('join-us-button');
const interestSendicon = document.getElementById('interest-send-icon');
const seekTherapyButton = document.getElementById('seek-therapy-button');
const seekTherapySendIcon = document.getElementById('seek-therapy-send-icon');
// const interestValidMsg = document.querySelector('#join-aarc.valid');
const seekTherapyForm = document.getElementById('seek-therapy-form');
const interestLoadingIcon = document.getElementById('interest-loading-icon');
const seekTherapyLoadingIcon = document.getElementById('seek-therapy-loading-icon');
const contactLoadingIcon = document.getElementById('contact-us-loading-icon');
// const successModal = document.getElementById('success-modal');
// const failureModal = document.getElementById('failure-modal');
const seekTherapySuccess = document.getElementById('seek-therapy-success');
const seekTherapyFailure = document.getElementById('seek-therapy-failure');
const joinAarcSuccess = document.getElementById('join-aarc-success');
const joinAarcFailure = document.getElementById('join-aarc-failure');
const contactSuccess = document.getElementById('contact-success');
const contactFailure = document.getElementById('contact-failure');

// const contactValidMsg = document.querySelector('#contact-us.valid');
const contactUsFirstName = document.getElementById('contact-us-first-name');
const contactUsLastName = document.getElementById('contact-us-last-name');
const contactUsContactNumber = document.getElementById('contact-us-contact-number');
const contactUsEmail = document.getElementById('contact-us-email');
const contactUsMessage = document.getElementById('contact-us-message');

const seekTherapyFirstName = document.getElementById('seek-therapy-first-name');
const seekTherapyLastName = document.getElementById('seek-therapy-last-name');
const seekTherapyContactNumber = document.getElementById('seek-therapy-contact-number');
const seekTherapyEmail = document.getElementById('seek-therapy-email');
const seekTherapyAge = document.getElementById('seek-therapy-age');
const seekTherapyNeeds = document.getElementById('needs');

const interestForm = document.querySelector('#interest-form');
const otherQualificationsInput = document.getElementById('interest-other-qualifications');
const otherQualificationsLabel = document.getElementById('label-other-qualifications');
const interestFirstName = document.getElementById('interest-first-name');
const interestLastName = document.getElementById('interest-last-name');
const interestContactNumber = document.getElementById('interest-contact-number');
const interestEmail = document.getElementById('interest-email');
const interestQualifications = document.getElementById('interest-qualifications');
const interestOtherQualifications = document.getElementById('interest-other-qualifications');
const interestInterest = document.getElementById('interest-interest');

// const therapyButtonIcon = document.querySelector('.seek-therapy-button .hero-button-icon');
// const aarcButtonIcon = document.querySelector('.join-aarc-button .hero-button-icon');
// const workshopButtonIcon = document.querySelector('.workshops-button .hero-button-icon');
// const therapyIconFadeIn = [{fill: '#451575', duration: 0},{fill: '#f7f7f7', duration: 200}];
// const therapyIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#451575', duration: 200}];  
// const aarcIconFadeIn = [{fill: '#154575', duration: 0},{fill: '#f7f7f7', duration: 200}];
// const aarcIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#154575', duration: 200}];  
// const workshopIconFadeIn = [{fill: '#751545', duration: 0},{fill: '#f7f7f7', duration: 200}];
// const workshopIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#751545', duration: 200}]; 
// const arrowIconFadeIn = [{stroke: '#154575', duration: 0},{stroke: '#f7f7f7', duration: 200}];
// const arrowIconFadeOut = [{stroke: '#f7f7f7', duration: 0},{stroke: '#154575', duration: 200}];


//Arrow Icon Animation
// const iconAnime = (element, svgIcon, fadeIn, fadeOut) => {
//     element.addEventListener('mouseenter', function(){
//     animation(svgIcon, fadeIn, 0, 0, 0, 0, 0, false, 'linear', true, false);
//   });
//   element.addEventListener('mouseleave', function(){
//     animation(svgIcon, fadeOut, 0, 0, 0, 0, 0, false, 'linear', true, false);
//   });
// }

// iconAnime(navButton, navButton, iconFadeIn, iconFadeOut);
// iconAnime(therapyButton, therapyButtonIcon, therapyIconFadeIn, therapyIconFadeOut);
// iconAnime(aarcButton, aarcButtonIcon, aarcIconFadeIn, aarcIconFadeOut);
// iconAnime(workshopButton, workshopButtonIcon, workshopIconFadeIn, workshopIconFadeOut);
// iconAnime(aboutAarcDropdown, aboutAarcDropdownArrow, arrowIconFadeIn, arrowIconFadeOut);
// iconAnime(servicesDropdown, servicesDropdownArrow, arrowIconFadeIn, arrowIconFadeOut);


//Disabling and enabling of Other Qualifications Input
// const disableInput = () => {
//   if (qualificationsInput.value == 'Other...'){
//     otherQualificationsInput.setAttribute('required', '') ;
//     otherQualificationsInput.removeAttribute('disabled','');
//     otherQualificationsInput.classList.remove('disabled-input');
//     otherQualificationsLabel.classList.remove('disabled-label');
//   } else {
//     otherQualificationsInput.removeAttribute('required', '') ;
//     otherQualificationsInput.setAttribute('disabled','');
//     otherQualificationsInput.classList.add('disabled-input');
//     otherQualificationsLabel.classList.add('disabled-label');
//     otherQualificationsInput.value='';
//   }
// }
  
// qualificationsInput.addEventListener('click', () => {
//   disableInput();
// });
  
//Sending Form Data and error handling
const sendMailData = (sendData, sendButton, sendIcon, successMsg, failureMsg) => {
// const sendMailData = (sendData) => {
  sendButton.classList.add('hidden');
  sendIcon.classList.remove('hidden');
  sendIcon.classList.add('flex', 'animate-spin');
  
  fetch('/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(sendData)
  })
  
  .then(response => {
    let data = response; 
    return data;
  })
  
  .then(data => {
    if (!data.ok) {
      sendButton.classList.remove('hidden')
      sendIcon.classList.remove('flex', 'animate-spin');
      sendIcon.classList.add('hidden')
      failureMsg.classList.add('flex')
      setTimeout(() => {
        failureMsg.classList.remove('flex')
        failureMsg.classList.add('hidden')
      }, 5000 )
      throw new Error(error)
    } else {
      // (function() {
        sendButton.classList.remove('hidden')
        sendIcon.classList.remove('flex', 'animate-spin');
        sendIcon.classList.add('hidden')
        successMsg.classList.add('flex')
        setTimeout(() => {
          successMsg.classList.remove('flex')
          successMsg.classList.add('hidden')
        }, 5000 )
      // }())
    }
  })
  
  .catch((error) => {
    // (function() {
      sendButton.classList.remove('hidden')
      sendIcon.classList.remove('flex', 'animate-spin');
      sendIcon.classList.add('hidden')
      failureMsg.classList.add('flex')
      setTimeout(() => {
        failureMsg.classList.remove('flex')
        failureMsg.classList.add('hidden')
      }, 5000 )
      console.warn(error.message)
    // }())
  })
  
}

//Contact Us Form
contactUsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    form: 'Contact Form', 
    firstName : contactUsFirstName.value.trim(), 
    lastName : contactUsLastName.value.trim(), 
    contactNumber : contactUsContactNumber.value.trim(), 
    email : contactUsEmail.value.trim(), 
    message : contactUsMessage.value.trim()
  }

  sendMailData(formData, contactUsButton, contactLoadingIcon, contactSuccess, contactFailure)
  // sendMailData(formData)
})

//Seek Therapy Form
seekTherapyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    form: 'Seek Therapy Form', 
    firstName: seekTherapyFirstName.value.trim(), 
    lastName: seekTherapyLastName.value.trim(), 
    contactNumber: seekTherapyContactNumber.value.trim(), 
    email: seekTherapyEmail.value.trim(), 
    age: seekTherapyAge.value, 
    needs: seekTherapyNeeds.value.trim()
  }

  sendMailData(formData, seekTherapyButton, seekTherapyLoadingIcon, seekTherapySuccess, seekTherapyFailure);
  // sendMailData(formData)
})
  
//Interest Form
interestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let formData = {
    form: 'Interest Form', 
    firstName: interestFirstName.value.trim(), 
    lastName: interestLastName.value.trim(), 
    contactNumber: interestContactNumber.value.trim(), 
    email: interestEmail.value.trim(), 
    qualifications: interestQualifications.value, 
    otherQualifications: interestOtherQualifications.value.trim(), 
    interest: interestInterest.value
  }
  
  sendMailData(formData, interestButton, interestLoadingIcon, joinAarcSuccess, joinAarcFailure)
  // sendMailData(formData)
})  