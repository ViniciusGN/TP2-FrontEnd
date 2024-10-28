let total = 0;

function choice(product) {
    total += price(product); 
    console.log("Total actuel: ${total} euros");
    alert("Vous ajoutez " + product + " Le prix total est : " + total)
}

function price(product) {
    const priceProducts = {
        "pommes": 1.00,
        "banane": 1.20,
        "ananas": 4.00,
        "croissaint": 0.50,
        "painauchocolat": 0.80,
        "baguette": 1.00,
        "boef": 10.00,
        "agneau": 15.00,
        "porc": 7.00
    }
    return priceProducts[product] || 0;
}

function pay() {
    if (total === 0) {
        alert("Votre panier est vide !");
    } else {
        const confirmation = confirm("Vous devez ${total} euros ! Ce sera tout ?");
        if (confirmation) {
            total = 0;
            alert("Merci pour votre achat !");
        }
    }
}