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

//     static getTotal(unitPrice: number, quantity:number ,discount?: number) :number {
//         const priceWithoutDiscount = unitPrice * quantity;
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

// const n = OrderDetail.getTotal(500, 2, 0.1);
// console.log(n);