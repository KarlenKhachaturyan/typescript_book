// interface Product {
//     readonly product: string;
//     unitPrice: number;
// }

// interface OrderDetails {
//     product: Product;
//     quantity: number;
//     getTotal(discount: number): number;
// }

// const table: Product = {
//     product: "table",
//     unitPrice: 2000
// }

// const tableOrder: OrderDetails = {
//     product: table,
//     quantity: 5,
//     getTotal(discount?: number): number {
//         const priceWithoutDiscount = this.product.unitPrice * this.quantity;
//         const discounAmount = priceWithoutDiscount * (discount || 0);
//         return priceWithoutDiscount - discounAmount;
//     }
// }

// console.log(tableOrder.getTotal(5));