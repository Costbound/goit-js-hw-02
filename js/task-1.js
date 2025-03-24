function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = pricePerDroid * quantity;
    return totalPrice > customerCredits ? "Insufficient funds!" : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}