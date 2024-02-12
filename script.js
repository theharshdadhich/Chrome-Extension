document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const passwordDisplay = document.getElementById('password');

    generateBtn.addEventListener('click', function () {
        generatePassword();
    });

    function generatePassword() {
        const length = '16';
        const apiKey = ''; 
        const apiUrl = 'https://api.api-ninjas.com/v1/passwordgenerator?length=' + length;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(result => {
            const generatedPassword = result.password;
            passwordDisplay.textContent = generatedPassword;
        })
        .catch(error => {
            console.error('Error fetching password:', error);
            passwordDisplay.textContent = 'Error generating password';
        });
    }
});
