


// Calcul des coûts pour chaque matériau
const betonPriceGramme = 0.0011;
const resinePriceGramme = 0.013;
const cirePriceGramme = 0.008;
const fragrance1 = 0.35;
const fragrance10 = 0.17;
const packagePrice = 1;
const Fg = 1;
 let containCost;
// Fonction pour calculer le coût total et envoyer un email récapitulatif
function calculateCost(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre normalement

  // Récupération des valeurs saisies par l'utilisateur
  const weightContainValue = parseFloat(
    document.getElementById("weightContain").value
  );
  const weightValue = parseFloat(document.getElementById("weight").value);
  const fragranceValue = parseFloat(
    document.querySelector("#fragrance option:checked").value
  );

  function getSelectedMaterial() {
    const selectedMaterial = document.querySelector('input[name="materials"]:checked');
    if(selectedMaterial)
      return selectedMaterial.value;
    else
      return null;
  }
  
  const selectedMaterial = getSelectedMaterial();
  console.log(selectedMaterial); // Affichera la valeur du matériau sélectionné, ou null s'il n'y en a aucun de sélectionné
  
 

  // Calcul cout contenant
 if (selectedMaterial === "beton") {
    containCost = betonPriceGramme * weightContainValue;
    console.log(containCost);
  }else if (selectedMaterial === "resine") {
    containCost = resinePriceGramme * weightContainValue;
    console.log(containCost);
  } 
  // Calcul cout de cire
  const waxCost = weightValue * cirePriceGramme;

  // Calcul cout de fragrance
  let fragranceCost;

  if (fragranceValue === 1) {
    const weightFragrance = weightValue * (1/100);
    console.log(weightFragrance);
    fragranceCost = weightFragrance * fragrance1;
    console.log(fragranceCost);
  } else if (fragranceValue === 10) {
    const weightFragrance = weightValue * (10/100);
    console.log(weightFragrance);
    fragranceCost = weightFragrance * fragrance10;
  }
console.log(fragranceCost);
  // Calcul du coût total d'achat
  const totalPurchaseCost =
    containCost + waxCost + fragranceCost + packagePrice + Fg;

  // Calcul du prix de vente recommandé avec une marge de 60%
  const recommendedSellingPrice = totalPurchaseCost * 1.6;

  // Mise à jour du tableau récapitulatif avec les résultats du calcul
  updateSummaryTable(
    containCost,
    waxCost,
    fragranceCost,
    totalPurchaseCost,
    recommendedSellingPrice
  );

  // Envoi de l'email récapitulatif
  sendEmail(totalPurchaseCost, recommendedSellingPrice);
}


console.log(containCost);
// Fonction pour mettre à jour le tableau récapitulatif
function updateSummaryTable(
  containCost,
  waxCost,
  fragranceCost,
  totalPurchaseCost,
  recommendedSellingPrice
) {
  const summaryTable = document.getElementById("summaryTable");
  summaryTable.innerHTML = `
    <tr>
      <td>Prix du contenant</td>
      <td>${containCost}</td>
    </tr>
    <tr>
      <td>Prix de la cire</td>
      <td>${waxCost.toFixed(2)}</td>
    </tr>
    <tr>
      <td>Prix de la fragrance</td>
      <td>${fragranceCost.toFixed(2)}</td>
    </tr>
    <tr>
      <td>Total d'achat</td>
      <td>${totalPurchaseCost.toFixed(2)}</td>
    </tr>
    <tr>
      <td>Prix de vente recommandé</td>
      <td>${recommendedSellingPrice.toFixed(2)}</td>
    </tr>
  `;
}

// Fonction pour envoyer un email récapitulatif
function sendEmail(totalPurchaseCost, recommendedSellingPrice) {
  // Configuration de l'email
  const email = {
    to: "candlesandpots@gmail.com",
    subject: "Récapitulatif de vente",
    body: `Coût total d'achat : ${totalPurchaseCost} \n Prix de vente recommandé : ${recommendedSellingPrice}`,
  };

  // Envoi de l'email (vous devez implémenter cette fonction dans votre backend)
  sendEmailToServer(email);
}

// Fonction pour envoyer l'email au serveur
function sendEmailToServer(email) {
  // Vous devez implémenter cette fonction dans votre backend pour gérer l'envoi d'email
  console.log("Email envoyé avec succès !", email);
}



// Gestionnaire d'événement pour le formulaire de calcul
document.querySelector("#calcForm").addEventListener("submit", calculateCost);
