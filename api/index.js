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
    res.json([
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
        perks: [
            'Amazing SPA',
            'Great location',
            'Very clean',
            'Family friendly',
            'Perfect wifi'
        ],
        vendors: [
            {
                vendor: 'booking.com',
                link: 'http://booking.com/hotels',
                price: 240
            },
            {
                vendor: 'hotels.com',
                link: 'http://hotels.com/hotels',
                price: 150
            },
            {
                vendor: 'agoda.com',
                link: 'http://agoda.com/hotels',
                price: 150
            }
        ],
        reviewCount: 3836,
        starRating: 2,
        rating: 6,
        isSpecial: true,
        id: "17639291",
        canCancel: true
    },
    {
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
        perks: [
            'Amazing SPA',
            'Great location',
            'Good food',
            'Family friendly',
            'Perfect wifi'
        ],
        vendors: [
            {
                vendor: 'booking.com',
                link: 'http://booking.com/hotels',
                price: 240
            },
            {
                vendor: 'hotels.com',
                link: 'http://hotels.com/hotels',
                price: 150
            },
            {
                vendor: 'agoda.com',
                link: 'http://agoda.com/hotels',
                price: 150
            }
        ],
        reviewCount: 3836,
        starRating: 3,
        rating: 9.2,
        isSpecial: true,
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
        perks: [
            'Amazing SPA',
            'Great location',
            'Very clean',
            'Family friendly',
            'Perfect wifi'
        ],
        vendors: [
            {
                vendor: 'booking.com',
                link: 'http://booking.com/hotels',
                price: 240
            },
            {
                vendor: 'hotels.com',
                link: 'http://hotels.com/hotels',
                price: 150
            },
            {
                vendor: 'agoda.com',
                link: 'http://agoda.com/hotels',
                price: 150
            }
        ],
        reviewCount: 3836,
        starRating: 5,
        rating: 7.8,
        isSpecial: true,
        id: "1763991",
        canCancel: true
    }]);
});