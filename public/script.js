
    // ...
//     const form = document.getElementById("myForm");
//
//     // Add an event listener for the form submission
//     form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//
//     // Fetch the form data
//     const formData = new FormData(this);
//
//     // Send a POST request to the server
//     fetch("/send_email", {
//     method: "POST",
//     body: formData,
// })
//     .then(function (response) {
//     if (response.ok) {
//     // Handle the success case
//     console.log("Email sent successfully.");
//     // Display a thank you message on the same page
//     document.getElementById("message").textContent =
//     "Thank you for your message!";
// } else {
//     // Handle the error case
//     console.log("An error occurred while sending the email.");
//     // Display an error message on the same page
//     document.getElementById("message").textContent =
//     "An error occurred while sending the email.";
// }
// })
//     .catch(function (error) {
//     console.log("An error occurred:", error);
//     // Display an error message on the same page
//     document.getElementById("message").textContent =
//     "An error occurred while sending the email.";
// });
// });
    /* Contact button, form, submit button */
    var ct_btn = document.getElementById('contact-button');

    var ct_form = document.getElementById('contact-form');

    /* Button holders */
    var btn_holders = document.querySelectorAll('#contact-form .button-holders');

    /* The inputs */
    var inputs = document.querySelectorAll('#contact-form .form-control input');

    /* The form */
    var form = document.getElementById('myForm');

    /* Success message */
    var success_msg = document.getElementById('success-msg');

    /* h1 and submit button of the form */
    var h1 = document.querySelectorAll('#myForm h1')[0];
    var submit = document.getElementById('submit');



    /* start animation on ct_btn click by adding the grow class */

    ct_btn.onclick = function() {
        this.innerHTML = '';
        this.className = 'grow';
    }

    /* add transitionend event for the button to show form */
    ct_btn.addEventListener('transitionend', function(){
        this.style.display = 'none';
        ct_form.style.display = 'flex';
    });

    /* Shrink the button holders on click and reveal the input behind it */
    btn_holders.forEach(btn => {
        btn.addEventListener('click', function(){
            btn.innerHTML += ':';
            btn.style.width = '80px';
            btn.parentNode.childNodes[3].focus();
        })
    });

    /* Submit form */
    // form.addEventListener('submit', function(e){
    //     e.preventDefault();
    //
    //     var allRight = true;
    //
    //     // Go through all inputs
    //     inputs.forEach(input => {
    //
    //         // If an input is empty, don't allow to continue
    //         if(input.value === ''){
    //             allRight = false;
    //         }
    //     });
    //
    //
    //     // Only continue if every input is filled
    //     if(allRight) {
    //
    //         // hide title and button
    //         h1.style.display = 'none';
    //         submit.style.display = 'none';
    //
    //         inputs.forEach(input => {
    //             input.style.display = 'none';
    //         });
    //
    //         btn_holders.forEach(btn => {
    //             btn.innerHTML = '';
    //             btn.style.width = '40px';
    //             btn.className = 'loader';
    //         });
    //
    //         // after 6 seconds show to complete message
    //         setTimeout(function(){
    //             success_msg.className = 'grow';
    //             form.style.display = 'none';
    //         }, 2000);
    //
    //     } else {
    //         alert('Please make sure to fill all the inputs!');
    //     }
    // });
    document.getElementById('submit').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Display the thank you message
        document.getElementById('success-msg').style.display = 'block';

        // Change the text of the button to "Thank You"
        document.getElementById('submit').innerHTML = 'Thank You';

        // Perform the actual form submission using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/send_email', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Email sent successfully!');
                } else {
                    console.log('Failed to send email. Error: ' + xhr.responseText);
                }
            }
        };
        xhr.send(JSON.stringify({
            name: document.getElementsByName('name')[0].value,
            email: document.getElementsByName('email')[0].value,
            subject: document.getElementsByName('subject')[0].value,
            message: document.getElementsByName('message')[0].value
        }));

        // Optionally, you can clear the form fields after submission
        document.getElementById('myForm').reset();

        // Reset the button text to "Send" after 5 seconds
        setTimeout(function() {
            document.getElementById('submit').innerHTML = 'Send';
        }, 5000);
    });






    // Get all the timeline components
    const timelineComponents = document.querySelectorAll('.timeline-component');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
});

    // Observe each timeline component
    timelineComponents.forEach(component => {
    observer.observe(component);
});
    document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".pricing-plan");

    function showCards() {
    cards.forEach(function(card, index) {
    setTimeout(function() {
    card.classList.add("show");
}, 500 * index);
});
}

    showCards();
});

    // document.getElementById('myForm').addEventListener('submit', function (e) {
    //
    //
    //     // Optionally, you can clear the form fields after submission
    //     document.getElementById('myForm').reset();
    // });




    <!--        <script>-->
    <!--            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);-->

    <!--            ScrollTrigger.normalizeScroll(true);-->

    <!--            let smoother = ScrollSmoother.create({-->
    <!--                smooth: 2,-->
    <!--                effects: true,-->
    <!--            });-->
