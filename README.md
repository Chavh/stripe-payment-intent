# Stripe Payment Intent Project
This project demonstrates how to use Stripe Payment Intents to handle payments on a website. It is built using Node.js, Express, and serves a static HTML file located in the public directory that displays the Stripe Checkout and Card Elements on the browser.

## Getting Started
Clone the repository by running ```git clone https://github.com/Chavh/stripe-payment-intent``` in your terminal.

Install the necessary dependencies by running ```npm install``` in the project's root directory.

Start the server by running ```npm start```.

Open your browser and navigate to http://localhost:8080 to see the checkout and card elements on the browser.

To test the payment process, you will need to have a Stripe account and a test API key. Once you have these, you can replace the placeholder values in the server.js file with your own API key and test the payment process.

# NB: this is for testing and illustration purposes.

## Project Structure
The public directory contains the static HTML file that displays the Stripe Checkout and Card Elements on the browser.
The server.js file contains the code for the Node.js server, which runs Express and handles the payment process using Stripe Payment Intents.

## Note
Make sure to replace the placeholder values in the server.js file with your own Stripe API key, and also make sure that your server is running on the correct port.
The project uses a test API key as for testing and illustration purposes.
You can also use environment variable instead of hardcoding the key in the server.js file.

## Additional Resources
Stripe Payment Intents documentation
Stripe Checkout documentation
Stripe Card Elements documentation
Express.js documentation

## Conclusion
This project provides a basic implementation of Stripe Payment Intents and serves as a starting point for integrating Stripe payments into your own website. You can use this project as a reference and build upon it to add more features and functionality to your own payment system.