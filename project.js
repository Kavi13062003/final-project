
// (function ($) {
//     "use strict"

//     $(".testimonial-carousel").owlCarousel({
//         autoplay:true,
//         smartSpeed:1000,
//         center:true,
//         margin:24,
//         dots:true,
//         loop:true,
//         nav:false,
//         Responsive:{
//             0:{
//                 items:1
//             },
//             768:{
//                 items:2
//             }
//         }
//     });
// })(jQuery);

// var enquire=document.querySelector(".enquire")
// var addon=document.getElementById("addon")
// var addpopupbutton=document.getElementById("addpopup")
//  var addpopupbutton=document.getElementById()

// addpopupbutton.addEventListener("click",function(){
//     addon.style.display="block"
// })


// function show(){
// var register=document.getElementById("register")
// var registrationbutton=document.getElementById("registration")


//     registrationbutton.addEventListener("click",function(){
//         register.style.display="block"
//     })
// }
// function hide(){
// var deleteitem=document.getElementById("delete")
// var addpopupbutton=document.getElementById("addpopup")

//     addpopupbutton.addEventListener("click",function(){
//         addon.style.display="none"
//     })
// }



// window.onclick = myFunction;

// function show(){
//     document.getElementsByTagName("form")[0].style.display="block";
// }

function show(){
    document.getElementById("registration").style.display="block";
}
function hide(){
    document.getElementById("registration").style.display="none";
}



function validateForm(event) {
    event.preventDefault();

    // Get form inputs
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    // Regular expressions for validation
    var usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var phoneRegex = /^\d{10}$/;

    // Validation
    var isValid = true;

    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').innerText = 'Invalid username';
        isValid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = 'Invalid password';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Invalid phone number';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    if (isValid) {
        alert('Registration successful!');
        // Perform further actions (e.g., submit form to server)
    }
}





// Display an alert when the page loads
window.onload = function() {
    alert('Welcome to Our Website!');
};

function validateForm(event) {
    // ... (your existing form validation code)
}



// var isUserRegistered = false; // Set to true if the user is registered

//         function registerUser(event) {
//             event.preventDefault();

//             // Perform registration logic (you might need to connect to a server to verify registration)
//             // For simplicity, we'll just set isUserRegistered to true in this example
//             isUserRegistered = true;

//             // Show the booking section and hide the registration section
//             document.getElementById('registrationSection').style.display = 'none';
//             document.getElementById('bookingSection').style.display = 'block';
//         }

//         // Display the appropriate section based on user registration status
//         window.onload = function() {
//             if (isUserRegistered) {
//                 document.getElementById('registration').style.display = 'none';
//                 document.getElementById('booking').style.display = 'block';
//             }
//         };



//         var registrationCompleted = true;

//         function validateForm(event) {
//             event.preventDefault();

//             // Your existing validation logic here

//             // If the registration is successful, set registrationCompleted to true
//             registrationCompleted = false;

//             // Enable the booking form
//             document.getElementById('bookingForm').removeAttribute('disabled');
//         }

//         function submitBooking(event) {
//             event.preventDefault();

//             if (registrationCompleted) {
//                 // Your booking form submission logic here
//                 alert('Booking submitted successfully!');
//             } else {
//                 alert('Please complete the registration form first.');
//             }
//         }


        