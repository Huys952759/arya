export type ON_SALE = "ON_SALE"
export type OFF_SALE = "OFF_SALE"
export type SOLD_OUT = "SOLD_OUT"
export type NOT_LISTED = "NOT_LISTED"

export interface Color {
    name: string
    colorImage: string
    images: string[]
}

export interface Category {
    name: {
        Chinese: string
        English: string
    }
    path: string
}

export interface Product {
    id: string
    name: {
        Chinese: string
        English: string
    }
    description: {
        Chinese: string
        English: string
    }
    coverImage: string
    price: {
        Chinese: string
        English: string
    }
    status: (ON_SALE | OFF_SALE | SOLD_OUT | NOT_LISTED)
    categories: Category[]
    colors: Color[]
}
