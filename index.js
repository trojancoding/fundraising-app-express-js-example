import Stripe from 'stripe';
import express, {json} from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import createStripeRoutes from './routes/stripe.js';
import createApiRoutes from './routes/api.js';

dotenv.config();

const port = process.env.PORT || 3003;
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripeRoutes = createStripeRoutes(stripe);
const apiRoutes = createApiRoutes();

app.use(cors());
app.use(json());
app.use(stripeRoutes);
app.use(apiRoutes);

app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});