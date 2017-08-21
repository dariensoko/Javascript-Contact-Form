// Initialize Firebase
var config = {
    apiKey: "AIzaSyAfcURwi4OykDnn3pJwlARQ4fSM3-WLHDU",
    authDomain: "contactform-82c55.firebaseapp.com",
    databaseURL: "https://contactform-82c55.firebaseio.com",
    projectId: "contactform-82c55",
    storageBucket: "contactform-82c55.appspot.com",
    messagingSenderId: "84217545080"
};
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Event Listener for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

//Submit Form

function submitForm(e){
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form after submission
    document.getElementById('contactform').reset();
}

// Function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone:phone,
        message:message
    });
}