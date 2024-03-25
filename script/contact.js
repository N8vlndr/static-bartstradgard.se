let contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('result');
const sendBtn = document.getElementById('send-btn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const inputsObj = Object.fromEntries(formData);
    const inputs = JSON.stringify(inputsObj);
    sendBtn.innerHTML = 'Skickar...';

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: inputs
    })
        .then(async (response) => {
            await response.json();

            if (response.status == 200) {
                statusMsg.innerHTML = 'Tack för ditt meddelande! Vi återkommer så snart vi kan.';
            } else {
                statusMsg.innerHTML = 'Något gick fel. Vänligen försök igen.';
            }
        })
        .catch(_error => {
            statusMsg.innerHTML = 'Något gick fel. Vänligen försök igen.';
        })
        .then( () => {
            sendBtn.innerHTML = 'Klart!';
            setTimeout(() => {
                contactForm.reset();
                statusMsg.innerHTML = '';
                sendBtn.innerHTML = 'Skicka';
            }, 6000);
        });
});