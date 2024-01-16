import express from 'express';

const zeroDecimalCurrencies = ["BIF","CLP","DJF","GNF","JPY","KMF","KRW","MGA","PYG","RWF","UGX","VND","VUV","XAF","XOF","XPF"]; // currency shortNames
const threeDecimalCurrencies = ["BHD","JOD","KWD","OMR","TND"];
const divisableByHundredCurrencies = ["ISK","UGX"]; // currency shortNames

export default function createStripeRoutes(stripe) {
    const router = express.Router();

    router.post('/api/create-payment-intent', async (req, res) => {
        const { amount, currency, donationPath } = req.body;
        // On the server based on the currencies you need to adjust amount multiplier
        // to their decimal type or other special cases
        // https://stripe.com/docs/currencies

        /*
        Your logic here...

        */
        var newAmount = parseFloat(amount);
        var multiplier = 100;
        if(zeroDecimalCurrencies.includes(currency)){
            multiplier = 1;
        }
        if(threeDecimalCurrencies.includes(currency)){
            newAmount = amount.toFixed(2);
            multiplier = 1000;
        }
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: newAmount * multiplier,
                currency: currency,
                automatic_payment_methods: { enabled: true },
            });
            res.send({
                client_secret:paymentIntent.client_secret
            });
            console.log(`Created intent for ${donationPath}`)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    })
    return router;
}