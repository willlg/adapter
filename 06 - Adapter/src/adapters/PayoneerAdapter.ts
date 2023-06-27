import Payoneer from "../payoneer/Payoneer";
import IPaypalPayment from "../paypal/iPaypalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPaypalPayment{
    private token : Token;

    constructor(private payoneer: Payoneer){
        console.log("Adaptando Payoneer no PayPal")
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        return this.payoneer.receivePayment();
    }

}