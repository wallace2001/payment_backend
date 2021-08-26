import { Request, Response } from "express";
import { Payment } from '../model/Payment';
import MercadoPago from 'mercadopago';

MercadoPago.configure({
    sandbox: true,
    access_token: process.env.PUBLIC_KEY as string,
});

const getFullUrl = (req: any) =>{
    const url = req.protocol + '://' + req.get('host');
    return url;
}


class PaymentService{

    async store(req: Request, res: Response){
        const { id, email, description, amount } = req.params;

        //Create purchase item object template
        const purchaseOrder = {
            items: [
                {
                    id: id,
                    title: description,
                    description : description,
                    quantity: 1,
                    currency_id: 'BRL',
                    unit_price: parseFloat(amount)
                }
            ],
            payer : {
            email: email
            },
            auto_return : "all",
            external_reference : id,
            back_urls : {
            success : getFullUrl(req) + "/payments/success",
            pending : getFullUrl(req) + "/payments/pending",
            failure : getFullUrl(req) + "/payments/failure",
            }
        }

        try {
            const payment = await MercadoPago.preferences.create(purchaseOrder as any);
    
            return res.redirect(payment.body.init_point);
        } catch (error) {
            return res.send({error});
        }

    }
}

export { PaymentService }