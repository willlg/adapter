import Token from "../utils/Token";
import IPaypalPayment from "./iPaypalPayment";

export default class Paypal implements IPaypalPayment{
    
    private token : Token;
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pagamento via Paypal.");
    }
    paypalReceive(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Recebendo pagamento via Paypal.");
    }

}