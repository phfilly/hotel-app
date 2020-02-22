
function filterData(data, query) {
    if (Object.keys(query).length) {
        let hotels = data;

        if (query.GUEST_RATING) {
            hotels = hotels.filter(hotel => hotel.rating > parseInt(query.GUEST_RATING));
        }

        if (query.CURRENCY) {
            hotels = hotels.filter(hotel => hotel.pricing.price < parseFloat(query.CURRENCY));
        }

        if (query.DISTANCE) {
            hotels = hotels.filter(hotel => hotel.distanceFromCenter < parseInt(query.DISTANCE));
        }

        if (query.STAR_RATING) {
            const stars = query.STAR_RATING.split(',');
            hotels = hotels.filter(hotel => stars.some(star => star === hotel.starRating.toString()));
        }

        if (query.SORT_BY) {
            if (query.SORT_BY === 'SUPPLIER_AND_PRICE') {
                hotels = hotels.sort((a, b) => a.pricing.price - b.pricing.price);
            } else {
                hotels = hotels.sort((a, b) => a.distanceFromCenter - b.distanceFromCenter);
            }
        }

        return hotels;
    } else {
        return data;
    }
}

module.exports = filterData;