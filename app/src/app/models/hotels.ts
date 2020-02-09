export interface Hotels {
    name: string,
    image: string,
    location: string,
    city: string,
    country: string,
    pricing: Price,
    vendors: Vendors[],
    reviewCount: number,
    starRating: number,
    canCancel: boolean,
    id: string
}

export interface Price {
    minRate: number,
    price: number,
    specialPrice: number
}

export interface Vendors {
    vendor: string,
    price: number
}