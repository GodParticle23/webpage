function sayHello() {
    alert("Hello! You clicked the button 🎉");
}

function sendEmail() {
    const email = "abhinav.akash@credera.com";
    const subject = "Customer has clicked a button, Hello from my webpage";
    const body = "Thank you for visiting our site. We will address your request.";
    window.location.href = `mailto:${abhinav.akash@CredentialsContainer.com}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}