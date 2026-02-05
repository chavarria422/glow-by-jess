export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tag?: string;
    quantity?: number;
}

export interface Brand {
    id: number;
    name: string;
}

export interface CheckoutState {
    isOpen: boolean;
    status: 'idle' | 'processing' | 'success';
}