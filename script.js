const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const choiceInput = document.getElementById('choice');
const friendForm = document.getElementById('friendForm');
const receiverEmailInput = document.getElementById('receiverEmail');

// Track if the Yes button is on the left
let isYesLeft = true;

// When "No" is clicked, swap the positions of the buttons and change the color to Red
noBtn.addEventListener('click', () => {
    if (isYesLeft) {
        yesBtn.style.left = '160px'; // Move Yes to the right
        noBtn.style.left = '30px';   // Move No to the left
    } else {
        yesBtn.style.left = '30px';  // Move Yes back to the left
        noBtn.style.left = '160px';  // Move No back to the right
    }
    isYesLeft = !isYesLeft; // Toggle position flag

    // Change background color of No button to Red and Yes button to default
    noBtn.style.backgroundColor = 'red';
    yesBtn.style.backgroundColor = '#ff6f91'; // Default color for Yes button

    setTimeout(() => {
        // Swap the text after the buttons have moved
        yesBtn.innerText = 'Yes';
        noBtn.innerText = 'No';
    }, 500); // Wait for transition to complete (500ms)

    choiceInput.value = 'Yes'; // Track the choice
});

// When "Yes" is clicked, change the background color to Green
yesBtn.addEventListener('click', () => {
    // Toggle the text
    if (yesBtn.innerText === 'No') {
        noBtn.innerText = 'Yes';
        yesBtn.innerText = 'No';
    } else {
        yesBtn.innerText = 'Yes';
        noBtn.innerText = 'No';
    }

    // Change background color of Yes button to Green and No button to default
    yesBtn.style.backgroundColor = 'green';
    noBtn.style.backgroundColor = '#6a0572'; // Default color for No button

    choiceInput.value = 'No'; // Track the choice
});

// Update form action to send to both emails
friendForm.addEventListener('submit', (e) => {
    const receiverEmail = receiverEmailInput.value;
    if (receiverEmail) {
        friendForm.action = `mailto:himanshukasera65@gmail.com,${receiverEmail}`;
    } else {
        friendForm.action = 'mailto:himanshukasera65@gmail.com';
    }
});
