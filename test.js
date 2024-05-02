//on recupere les valeur des inputs
//let baliseNom = document.getElementById("nom")
//let nom = baliseNom.value
//console.log(nom); // affiche ce qui est contenu dans la balise name

// PRICES
const betonPriceGramme = "0,0011";
const resinePriceGramme = "0,013";
const cirePriceGramme = "0,008";
const fragrance1 = "0,35";
const fragrance10 = "0,35";
const packagePrice = "1";
const Fg = "1";


const materials = ["Béton", "Résine"];

// generate the radio groups
const group = document.querySelector("#group");
group.innerHTML = materials
  .map(
    (material) => `<div class="form-check">
        <input type="radio" class="form-check-input" name="materials" value="${material}" id="${material}">
         <label class="form-check-label" for="${material}">${material}</label>
    </div>`
  )
  .join(" ");

// add an event listener for the change event
const radioButtons = document.querySelectorAll('input[name="materials"]');
for (const radioButton of radioButtons) {
  radioButton.addEventListener("change", showSelected);
}

function showSelected(e) {
  console.log(e);
  if (this.checked) {
    document.querySelector("#output").innerText = `La matiere selectioné est: ${this.value}`;
    const matiere = `${this.value}`;
    console.log(matiere);
    return matiere;
  }
  
}
