const Mailjet = require("node-mailjet");
require('dotenv').config(); // Charge les variables d'environnement à partir du fichier .env

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC, // ou votre clé publique
  process.env.MJ_APIKEY_PRIVATE // ou votre clé privée
);

const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "candlesandpots@gmail.com",
        Name: "Kevin",
      },
      To: [
        {
          Email: "candlesandpots@gmail.com",
          Name: "Kevin",
        },
      ],
      Subject: "Greetings from Mailjet.",
      TextPart: "My first Mailjet email",
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      CustomID: "AppGettingStartedTest",
    },
  ],
});

request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
