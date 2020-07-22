// interface Product { 
//     name: string;
//     unitPrice:number;
// }

// interface IOrderDetails {
//     product:Product;
//     quantity: number;
//     getTotal(discount?: number): number;
// }

// class OrderDetails implements IOrderDetails {
//     constructor(public product:Product, public quantity:number=1){
//         this.product = product;
//         this.quantity = quantity;
//     }

//     getTotal(discount?: number) :number {
//         const priceWithoutDiscount = this.product.unitPrice * this.quantity;
//         const discountAmount = priceWithoutDiscount * (discount || 0);
//         return priceWithoutDiscount - discountAmount;
//     }
// }