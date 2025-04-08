
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
const seekTherapyFailureText = document.querySelector('#seek-therapy-failure p');
const joinAarcSuccess = document.getElementById('join-aarc-success');
const joinAarcFailure = document.getElementById('join-aarc-failure');
const joinAarcFailureText = document.querySelector('#join-aarc-failure p');
const contactSuccess = document.getElementById('contact-success');
const contactFailure = document.getElementById('contact-failure');
const contactFailureText = document.querySelector('#contact-failure p');

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

  
//Sending Form Data and error handling
const sendMail = async function (sendData, sendButton, sendIcon, successMsg, failureMsg, failureMsgText) {
  sendButton.classList.add('hidden');
  sendIcon.classList.remove('hidden');
  sendIcon.classList.add('flex', 'animate-spin');
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(sendData)
    });
    const data = await response.json();
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
        }, 5000 )
      // }())
    }
  } catch (error) {
    sendButton.classList.remove('hidden')
    sendIcon.classList.remove('flex', 'animate-spin');
    sendIcon.classList.add('hidden')
    failureMsgText.textContent = 
    failureMsg.classList.add('flex')
    failureMsg.classList.remove('hidden')
    setTimeout(() => {
      failureMsg.classList.remove('flex')
      failureMsg.classList.add('hidden')
    }, 5000 )
    console.warn(error)
  }
}
const sendMailData = (sendData, sendButton, sendIcon, successMsg, failureMsg, failureMsgText) => {
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
    if (!response.ok) {
      return response.json().then(err => Promise.reject(err));
    }
    return response.text();
  })
  
  .then(data => {
    // Success case
    sendButton.classList.remove('hidden');
    sendIcon.classList.remove('flex', 'animate-spin');
    sendIcon.classList.add('hidden');
    successMsg.classList.add('flex');
    successMsg.classList.remove('hidden');
    setTimeout(() => {
      successMsg.classList.remove('flex');
      successMsg.classList.add('hidden');
    }, 5000);
  })
  .catch(error => {
    // Error case (network error, server error, or validation error)
    sendButton.classList.remove('hidden');
    sendIcon.classList.remove('flex', 'animate-spin');
    sendIcon.classList.add('hidden');
    if (error.errors) {
      // Validation error from server (400)
      failureMsgText.textContent = error.errors[0].msg
    } else {
      // Other errors (network, server 500, etc.)
      failureMsgText.textContent = error.message || error
    }
    failureMsg.classList.add('flex');
    failureMsg.classList.remove('hidden');
    setTimeout(() => {
      failureMsg.classList.remove('flex');
      failureMsg.classList.add('hidden');
    }, 8000);
  });
};

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

    sendMailData(formData, contactUsButton, contactLoadingIcon, contactSuccess, contactFailure, contactFailureText)
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

    sendMailData(formData, seekTherapyButton, seekTherapyLoadingIcon, seekTherapySuccess, seekTherapyFailure, seekTherapyFailureText);
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

  sendMailData(formData, interestButton, interestLoadingIcon, joinAarcSuccess, joinAarcFailure, joinAarcFailureText)
  // sendMailData(formData)

})  