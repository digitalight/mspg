let wordsList1 = [];
let wordsList2 = [];

// Function to fetch the lists of words from JSON files
async function fetchWords() {
    try {
        // Fetch the first list of words
        const response1 = await fetch('words1.json');
        if (!response1.ok) {
            throw new Error('Network response was not ok for words1.json');
        }
        wordsList1 = await response1.json();

        // Fetch the second list of words
        const response2 = await fetch('words2.json');
        if (!response2.ok) {
            throw new Error('Network response was not ok for words2.json');
        }
        wordsList2 = await response2.json();
    } catch (error) {
        console.error('Error fetching word lists:', error);
    }
}

// Function to generate a random password
function generatePassword() {
    if (wordsList1.length === 0 || wordsList2.length === 0) {
        console.log('Word lists are not loaded yet.');
        return;
    }

    // Choose a random word from each list
    const randomWord1 = wordsList1[Math.floor(Math.random() * wordsList1.length)];
    const randomWord2 = wordsList2[Math.floor(Math.random() * wordsList2.length)];

    // Generate a random 2-digit number
    const randomNumber = Math.floor(Math.random() * 90) + 10;

    // Combine the words and number to create the password
    const password = `${randomWord1}${randomWord2}${randomNumber}`;

    // Update the text box with the generated password
    document.getElementById('password').value = password;
}

// Function to copy the password to the clipboard
function copyToClipboard() {
    const passwordInput = document.getElementById('password');
    passwordInput.select(); // Select the text in the input
    document.execCommand('copy'); // Copy the selected text to the clipboard
}


// Function to handle the button click
function generateNewPassword() {
    generatePassword(); // Call the function to generate and display a new password
}

// Fetch the word lists when the script loads
fetchWords();
