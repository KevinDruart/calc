const mailjetApiKey = '****************************1234';
const mailjetApiSecret = '****************************abcd';

document.querySelector("#calcForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre normalement

  const emailContent = {
    "Messages": [
      {
        "From": {
          "Email": "candlesandpots@gmail.com",
          "Name": "Kevin"
        },
        "To": [
          {
            "Email": "candlesandpots@gmail.com",
            "Name": "Kevin"
          }
        ],
        "Subject": "Greetings from Mailjet.",
        "TextPart": "My first Mailjet email",
        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        "CustomID": "AppGettingStartedTest"
      }
    ]
  };

  fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(mailjetApiKey + ':' + mailjetApiSecret)}`
    },
    body: JSON.stringify(emailContent)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi de l\'e-mail');
    }
    return response.json();
  })
  .then(data => {
    console.log('E-mail envoyé avec succès:', data);
  })
  .catch(error => {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
  });
});
