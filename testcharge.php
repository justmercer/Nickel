<?php
require_once('vendor/autoload.php');
\Stripe\Stripe::setApiKey("sk_test_wRbCeWwbL25eMiiabgfiWqIX");

$charge = \Stripe\Charge::create([
    'amount' => 999,
    'currency' => 'usd',
    'source' => 'tok_visa',
    'receipt_email' => 'jenny.rosen@example.com',
]);

print json_encode($charge);