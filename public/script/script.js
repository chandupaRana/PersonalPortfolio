function submitForm(event) {
    event.preventDefault();

    // Capture user input
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact').value;
    const message = document.getElementById('message').value;

    // Redirect to the home page 
    window.location.href = 'views/home.ejs';
}