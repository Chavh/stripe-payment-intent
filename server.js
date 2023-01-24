const express = require('express');
const stripe = require('stripe')('sk_test_51MT8ziIhAvAiOWAEurqbmgKRk71pyw4zjD3dDUDSLLBfyWYxR6y3zHels6VjuHYZ9TTUIzVxmPZ2RGhoQMY0CpbD00jUTl8rPB');

const app = express();

app.use(express.static('public'));
app.post('/payments',async (req, res) => {
    const {client_secret} = await stripe.paymentIntents.create({
        amount: 2000,
        currency: 'usd',
        payment_method_types: ['card'],
      });
    res.send(JSON.stringify({clientSecret: client_secret}));
})

app.listen(8080, () => console.log('Application successfully started'));