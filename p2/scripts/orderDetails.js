export class OrderDetails {
    getTotal(discount) {
        const priceWithoutDiscount = this.product.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    }
    doSomething(input) {
        input.something();
        return input.result;
    }
}
//# sourceMappingURL=orderDetails.js.map