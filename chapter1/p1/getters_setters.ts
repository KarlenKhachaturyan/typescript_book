// class Product {
//     name:"string" | undefined;
//     private _unitPrice : number;
//     get unitPrice() : number {
//         return this._unitPrice;
//     }
//     set unitPrice(num: number){
//         if(num < 0){
//             num = 0;
//         }
//         this._unitPrice = num;
//     }
// }

// const table = new Product();
// table.name  = 'string';
// console.log(table.unitPrice);
// table.unitPrice = -10;
// console.log(table.unitPrice);