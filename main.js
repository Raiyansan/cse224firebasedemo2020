// Firstly, the Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBiaTGEigduDuEBfKUWRxJv1_wsGpFgICU",
  authDomain: "cse224dbdemo.firebaseapp.com",
  databaseURL: "https://cse224dbdemo.firebaseio.com",
  projectId: "cse224dbdemo",
  storageBucket: "cse224dbdemo.appspot.com",
  messagingSenderId: "210338768190",
  appId: "1:210338768190:web:485c62d7c5583ec0fcf86f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);



// Submit form function here
function submitForm(e) {

  e.preventDefault();


  // Get values

  var name = document.getElementById('name').value;
  var company = document.getElementById('company').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Save message
  saveMessage (name, email, phone, company, message);


  // Show alert
  document.querySelector('.alert').style.display='block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  }, 3000);
 


  // Clear form
  document.getElementsByID('contactForm').reset();


  //redirect to home page
  setTimeout(function(){
    document.location.href="./index.html";
  },3050);

}



// Save message to firebase
function saveMessage (name, email, phone, company, message){

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    compnay: company,
    email: email,
    contact: phone,
    message: message
  }

  
  );


}
