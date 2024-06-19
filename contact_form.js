const scriptURL = 'https://script.google.com/macros/s/AKfycbxl-JTOb5ETh4tjzb5w0B9PKWohT20D_dqK__ceuEQ_PC3EKbFN4UbkKz0h3hg2Z-M5/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            document.getElementById("msg").innerText = "Form submitted successfully!";
            // Reset the form after 5 seconds
            setTimeout(() => {
                form.reset();
                document.getElementById("msg").innerText = "";
            }, 2000);
        })
        .catch(error => console.error('Error!', error.message));
});