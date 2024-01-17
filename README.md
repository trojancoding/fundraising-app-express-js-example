# Fundraising App Express.js Backend Example

This example serves as a backend implementation for the Fundraising React App, providing essential functionalities such as handling payments via Stripe and managing API routes for form submissions, donation goal data retrieval, and latest donations data.

## Getting Started

Before running the backend, make sure to set up your Stripe API keys in the `.env` file.

```env
STRIPE_PUBLIC_KEY=pk_test_xxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxx
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/trojancoding/fundraising-app-express-js-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fundraising-app-express-js-example
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

Ensure your Stripe keys are correctly configured in the `.env` file.

```env
STRIPE_PUBLIC_KEY=pk_test_xxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxx
```

## Usage

Run the backend server using the following command:

```bash
npm start
```

The server will be accessible at `http://localhost:3003` by default.

## Project Structure

### 1. `index.js`

This is the main entry point of the server. It sets up the Express app, initializes the Stripe instance, and defines middleware for handling CORS, JSON parsing, error handling, and routing.

### 2. `routes/api.js`

Manages API routes related to form submissions, donation goal data retrieval, and latest donations data. Customize the logic within route handlers to suit your specific requirements.

### 3. `routes/stripe.js`

Handles the creation of payment intents for Stripe transactions. Adjusts the amount multiplier based on currency type to account for currencies with varying decimal places.

## API Endpoints

### 1. `POST /api/submitForm`

Handles form submissions. Customize the logic within this route to process form data as needed.

### 2. `GET /api/getDonationGoalData`

Retrieves donation goal data. Customize the logic within this route to fetch and return goal-related information.

### 3. `GET /api/getLatestDonationsData`

Retrieves the latest donations data. Customize the logic within this route to fetch and return the latest donations information.

### 4. `POST /api/create-payment-intent`

Creates a payment intent for Stripe transactions. The frontend should call this endpoint to initiate the payment process.