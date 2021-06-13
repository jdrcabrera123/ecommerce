const finalizarCompra = async () => {
  const resp = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer TEST-8477882161865342-061318-a16e13224d75ea375eefa262116e9fbc-170927734",
    },
    body: JSON.stringify({
        items : [
            {
                title: "Dummy Title",
                description: "Dummy description",
                picture_url: "http://www.myapp.com/myimage.jpg",
                category_id: "cat123",
                quantity: 1,
                currency_id: "COP",
                unit_price: 10
              }
        ]
    }),
  });
  const data = await resp.json()
  console.log(data)
};

finalizarCompra()

/*
curl -X POST \
    'https://api.mercadopago.com/checkout/preferences' \
    -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \ 
    -d '{
  "items": [
    {
      "title": "Dummy Title",
      "description": "Dummy description",
      "picture_url": "http://www.myapp.com/myimage.jpg",
      "category_id": "cat123",
      "quantity": 1,
      "currency_id": "U$",
      "unit_price": 10
    }
  ],
  "payer": {
    "phone": {},
    "identification": {},
    "address": {}
  },
  "payment_methods": {
    "excluded_payment_methods": [
      {}
    ],
    "excluded_payment_types": [
      {}
    ]
  },
  "shipments": {
    "free_methods": [
      {}
    ],
    "receiver_address": {}
  },
  "back_urls": {},
  "differential_pricing": {},
  "tracks": [
    {
      "type": "google_ad"
    }
  ]
}'

*/
