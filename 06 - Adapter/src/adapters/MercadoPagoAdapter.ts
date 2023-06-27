import MercadoPago from "../mercadoPago/MercadoPago";
import IPaypalPayment from "../paypal/iPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPaypalPayment{
    private token : Token;

    constructor(private mercadopago: MercadoPago){
        console.log("Adaptando MercadoPago no PayPal")
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercadopago.sendPayment();
    }
    paypalReceive(): void {
        return this.mercadopago.receivePayment();
    }
}