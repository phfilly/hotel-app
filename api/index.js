var express = require("express");
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/hotels", (req, res, next) => {
    res.json([{
        name: "MEININGER Hotel Amsterdam City West",
        image: "https://i.travelapi.com/hotels/6000000/5370000/5366100/5366086/c590339d_w.jpg",
        location: "Bedrijventerrein Sloterdijk",
        city: "Amsterdam",
        country: "The Netherlands",
        pricing: {
            minRate: 0,
            price: 60,
            specialPrice: 50
        },
        vendors: [
            {
                vendor: 'booking.com',
                price: 240
            },
            {
                vendor: 'hotels.com',
                price: 150
            }
        ],
        reviewCount: 3836,
        starRating: 2,
        id: "1763991",
        canCancel: true
    },
    {
        name: "ITC Hotel",
        image: "https://i.travelapi.com/hotels/2000000/1850000/1842100/1842001/55b66b48_w.jpg",
        location: "Grachtengordel-Zuid",
        city: "Amsterdam",
        country: "The Netherlands",
        pricing: {
            minRate: 0,
            price: 60,
            specialPrice: 50
        },
        vendors: [
            {
                vendor: 'booking.com',
                price: 240
            },
            {
                vendor: 'hotels.com',
                price: 150
            }
        ],
        reviewCount: 3836,
        starRating: 2,
        id: "1763991",
        canCancel: true
    }]);
});