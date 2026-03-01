require 'stripe'
require 'sinatra'

# This is your test secret API key.
Stripe.api_key = 'sk_test_51SgaUKRvcXwFOa1F0viO5izv6MM4ccDWuAZ5ZC1nPXEDfDU4e6FxxB2gDH3Y6UNIocMyIJjRl5jl1EeN4yN5jA5w00PQAMgo6u'

set :static, true
set :port, 4242

YOUR_DOMAIN = 'http://localhost:4242'

post '/create-checkout-session' do
  content_type 'application/json'

  session = Stripe::Checkout::Session.create({
    line_items: [{
      # Provide the exact Price ID (for example, price_1234) of the product you want to sell
      price: '{{PRICE_ID}}',
      quantity: 1,
    }],
    mode: 'payment',
    success_url: YOUR_DOMAIN + '/success.html',
    automatic_tax: {enabled: true},
  })
  redirect session.url, 303
end