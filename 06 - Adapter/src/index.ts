import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import IPayoneerPayment from "./payoneer/IPayoneerPayment";
import Payoneer from "./payoneer/Payoneer";
import Paypal from "./paypal/Paypal";
import IPaypalPayment from "./paypal/iPaypalPayment";

const payment : IPaypalPayment = new Paypal();
payment.paypalPayment();
payment.paypalReceive();

const payment2 : IPaypalPayment = new PayoneerAdapter(new Payoneer());
payment2.paypalPayment();
payment2.paypalReceive();

const payment3 : IPaypalPayment = new MercadoPagoAdapter(new MercadoPago());
payment3.paypalPayment();
payment3.paypalReceive();

