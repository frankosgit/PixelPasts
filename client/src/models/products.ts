export interface IProduct {
    name: string,
    default_price: {
        id: string,
        unit_amount: number
    },
    images: string[],
    description: string,
    id: string
}

export interface ICartItem {
    quantity: number,
    product: IProduct   
}

export class CartProduct {
    constructor(
    public quantity: number,
    public product: IProduct 
    ){}
}

export interface IProductRes {
    data: IProduct[]
}

export interface IPaymentConfirmation {
        url: string
}

export class CartItemForStripe {
    constructor(
        public quantity: number, 
        public default_price: string
    ){}
}