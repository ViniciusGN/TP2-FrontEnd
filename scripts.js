// Global variables
let total = 0;
const products = ["pommes", "banane", "ananas", "croissaint", "painauchocolat", "baguette", "boeuf", "agneau", "porc"];
const prices = [1.00, 1.20, 4.00, 0.50, 0.80, 1.00, 10.00, 15.00, 7.00];
let cart = Array(products.length).fill(0);

function selectProduct(productIndex) {
    const quantity = parseInt(prompt(`Combien de ${products[productIndex]} souhaitez-vous ajouter?`), 10);
    if (!isNaN(quantity) && quantity > 0) {
        cart[productIndex] += quantity;
        total += prices[productIndex] * quantity;
        console.log(`Current total: ${total} euros`);
        alert(`Vous avez ajouté ${quantity} ${products[productIndex]}(s). Le prix total est maintenant : ${total} euros.`);
    } else {
        alert("Quantité invalide.");
    }
}

function viewCart() {
    let cartContents = "Contenu du panier:\n";
    products.forEach((product, index) => {
        if (cart[index] > 0) {
            cartContents += `${product}: ${cart[index]} x ${prices[index].toFixed(2)}€\n`;
        }
    });
    cartContents += `\nTotal: ${total.toFixed(2)} euros`;
    alert(cartContents);
}

function makePayment() {
    if (total === 0) {
        alert("Votre panier est vide !");
    } else {
        viewCart();
        const confirmation = confirm(`Vous devez ${total.toFixed(2)} euros ! Ce sera tout ?`);
        if (confirmation) {
            total = 0;
            cart = Array(products.length).fill(0); // Reset cart
            alert("Merci pour votre achat !");
        }
    }
}
