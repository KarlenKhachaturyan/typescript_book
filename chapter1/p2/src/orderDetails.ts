export interface Product {
    name:string;
    unitPrice:number;
}


export class OrderDetails {
    product: Product;
    quantity: number;
    getTotal(discount?: number) :number{
        const priceWithoutDiscount = this.product.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    }
    doSomething(input: any){
        input.something();
        return input.result;
    }
}