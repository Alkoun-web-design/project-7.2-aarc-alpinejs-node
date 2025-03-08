
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

const seekTherapyForm = document.getElementById('seek-therapy-form');
const interestLoadingIcon = document.getElementById('interest-loading-icon');
const seekTherapyLoadingIcon = document.getElementById('seek-therapy-loading-icon');
const contactLoadingIcon = document.getElementById('contact-us-loading-icon');

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
const contactUsMissingMsg = document.getElementById('contact-us-missing-message');

const seekTherapyFirstName = document.getElementById('seek-therapy-first-name');
const seekTherapyLastName = document.getElementById('seek-therapy-last-name');
const seekTherapyContactNumber = document.getElementById('seek-therapy-contact-number');
const seekTherapyEmail = document.getElementById('seek-therapy-email');
const seekTherapyAge = document.getElementById('seek-therapy-age');
const seekTherapyNeeds = document.getElementById('needs');
const seekTherapyMissingMsg = document.getElementById('seek-therapy-missing-message');

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
const joinAarcMissingMsg = document.getElementById('join-aarc-missing-message');

  
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
      throw new Error(error)
    } else {
      // (function() {
        sendButton.classList.remove('hidden')
        sendIcon.classList.remove('flex', 'animate-spin');
        sendIcon.classList.add('hidden')
        successMsg.classList.add('flex')
        successMsg.classList.remove('hidden')
        setTimeout(() => {
          successMsg.classList.remove('flex')
          successMsg.classList.add('hidden')
          console.log('timeout')
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
      failureMsg.classList.remove('hidden')
      setTimeout(() => {
        failureMsg.classList.remove('flex')
        failureMsg.classList.add('hidden')
        console.log('timeout')
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

  if (formData.firstName.value === '' || formData.lastName.value === '' || formData.contactNumber.value === '' || formData.email.value === '' || formData.message.value === '') {
    contactUsMissingMsg.classList.add('flex')
    contactUsMissingMsg.classList.remove('hidden')
    setTimeout(() => {
      contactUsMissingMsg.classList.remove('flex')
      contactUsMissingMsg.classList.add('hidden')
      console.log('timeout')
    }, 5000 )
  } else {
    sendMailData(formData, contactUsButton, contactLoadingIcon, contactSuccess, contactFailure)
    // sendMailData(formData)
  }

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

  if (formData.firstName.value === '' || formData.lastName.value === '' || formData.contactNumber.value === '' || formData.email.value === '' || formData.age.value === '' || formData.needs.value === '') {
    seekTherapyMissingMsg.classList.add('flex')
    seekTherapyMissingMsg.classList.remove('hidden')
    setTimeout(() => {
      seekTherapyMissingMsg.classList.remove('flex')
      seekTherapyMissingMsg.classList.add('hidden')
      console.log('timeout')
    }, 5000 )
  } else {
    sendMailData(formData, seekTherapyButton, seekTherapyLoadingIcon, seekTherapySuccess, seekTherapyFailure);
    // sendMailData(formData)
  }

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

  if (formData.firstName.value === '' || formData.lastName.value === '' || formData.contactNumber.value === '' || formData.email.value === '' || formData.qualifications.value === '' || formData.interest.value === '') {
    joinAarcMissingMsg.classList.add('flex')
    joinAarcMissingMsg.classList.remove('hidden')
    setTimeout(() => {
      joinAarcMissingMsg.classList.remove('flex')
      joinAarcMissingMsg.classList.add('hidden')
      console.log('timeout')
    }, 5000 )
  } else {
  sendMailData(formData, interestButton, interestLoadingIcon, joinAarcSuccess, joinAarcFailure)
  // sendMailData(formData)
  }

})  