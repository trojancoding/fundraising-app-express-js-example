import express from 'express';

export default function createApiRoutes() {
    const router = express.Router();

    router.post('/api/submitForm', async (req, res) => {
        const { message, email, donationPath } = req.body;

        /*
        Your logic here...

        */
        console.log(`${donationPath} Message from ${email}: ${message}`)
        res.send({
            message:"OK"
        });
    })
    router.get('/api/getDonationGoalData', async (req, res) => {
        const { donationPath } = req.query;

        /*
        Your logic here...

        */
        console.log(`${donationPath} goal donation data sent`)
        res.send(   {
                goalArray:[
                    {
                        currencyShortName:"USD",// currency in which amount is stated
                        currencySymbol:"$",// string of donation currency symbol that is shown before donation amount
                        goalAmount: 10000, // goal amount number in the currency
                        raisedAmount: 5000, // raised amount number in the currency
                    },
                    {
                        currencyShortName:"EUR",
                        currencySymbol:"€",
                        goalAmount: 9190,
                        raisedAmount: 4600,
                    },
                ]
            });
    })
    router.get('/api/getLatestDonationsData', async (req, res) => {
        const { donationPath } = req.query;

        /*
        Your logic here...

        */
        console.log(`${donationPath} latest donations data sent`)
        res.send([
            {
              donorName: "Anonymous",     //    String of donor name
              donationAmount: 200, //   donation amount number
              donationCurrency: "$", // string of donation currency that is shown before donation amount
              donationTimestamp: 186400000, // unix timestamp of the donation
            },
            {
              donorName: "John Doe",     //    String of donor name
              donationAmount: 100, //   donation amount number
              donationCurrency: "$", // string of donation currency that is shown before donation amount
              donationTimestamp: 126400000, // unix timestamp of the donation
            },
            {
                donorName: "Anonymous",     //    String of donor name
                donationAmount: 12.23, //   donation amount number
                donationCurrency: "€", // string of donation currency that is shown before donation amount
                donationTimestamp: 46400000, // unix timestamp of the donation
              },
              {
                donorName: "John Doe",     //    String of donor name
                donationAmount: 30, //   donation amount number
                donationCurrency: "$", // string of donation currency that is shown before donation amount
                donationTimestamp: 16400000, // unix timestamp of the donation
              },
              {
                donorName: "John Doe",     //    String of donor name
                donationAmount: 1, //   donation amount number
                donationCurrency: "$", // string of donation currency that is shown before donation amount
                donationTimestamp: 400000, // unix timestamp of the donation
              },
            ]);
    })

    return router;
}