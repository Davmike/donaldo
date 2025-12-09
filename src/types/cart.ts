export interface CartItem {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    originalPrice?: number;
    discount?: number;
    section: string;
    quantity: number;
}

export interface CartSection {
    title: string;
    items: CartItem[];
}



