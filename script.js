const getButton = document.getElementsByClassName('subscribe-btn')[0];
getButton.addEventListener("click", validate);


function validate(e) {
  e.preventDefault();

  const getEmail = document.getElementById('email');
  const getErrorMessage = document.getElementsByClassName('error-msg')[0];
  const emailChecker =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 

  if (!getEmail.value) {
    getErrorMessage.classList.add("visible");
    getErrorMessage.textContent = "Check your email please";
   
  } else if (getEmail.value.match(emailChecker)) {
    getErrorMessage.textContent = " ";

  } 
}