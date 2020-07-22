// class Product { 
//     name:string;
//     unitPrice:number;
// }

// class OrderDetail {
//     public product: Product;
//     public quantity: number;
//     private deleted:boolean;

//     constructor(product:Product, quantity:number = 1){
//         this.product = product,
//         this.quantity = quantity
//     }

//     public getTotal(discount?: number) :number {
//         const priceWithoutDiscount = this.product.unitPrice * this.quantity;
//         const discountAmount = priceWithoutDiscount * (discount || 0);
//         return priceWithoutDiscount - discountAmount;
//     }

//     public delete(): void{
//         this.deleted = true;
//     }
// }

// const table = new Product();
// table.name = "classNameTable";
// table.unitPrice = 300;

// const ordD = new OrderDetail(table, 4);
// console.log(ordD.getTotal());