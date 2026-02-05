import React from 'react';
import { Product } from '../types';

interface ProductListProps {
    products: Product[];
    cart: Product[];
    onAddToCart: (product: Product) => void;
    onUpdateQuantity: (index: number, delta: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, cart, onAddToCart, onUpdateQuantity }) => {
    return (
        <section className="px-4 py-8 max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#161216] text-xl font-bold tracking-tight">Catálogo de Productos</h3>
                <button className="text-primary text-sm font-bold hover:underline">Ver todos</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map(product => {
                    const cartItemIndex = cart.findIndex(item => item.id === product.id);
                    const cartItem = cart[cartItemIndex];
                    const quantity = cartItem ? (cartItem.quantity || 1) : 0;

                    return (
                        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-softElevation transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full border border-transparent hover:border-primary/10">
                            <div className="relative aspect-square overflow-hidden bg-accent-pink/30">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://dummyimage.com/400x400/FDE1F3/d372bf.png&text=Glow+by+jess';
                                    }}
                                />
                                {product.tag && (
                                    <div className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase ${product.tag === 'Popular' ? 'bg-[#161216]' : 'bg-primary'}`}>
                                        {product.tag}
                                    </div>
                                )}
                            </div>
                            <div className="p-3 flex flex-col flex-grow">
                                <h4 className="font-bold text-sm mb-1 leading-tight line-clamp-2">{product.name}</h4>
                                <p className="text-xs text-[#816a7c] mb-2">{product.description}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-base font-extrabold text-[#161216]">${product.price.toFixed(2)}</span>

                                    {quantity > 0 ? (
                                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1 border border-primary/20">
                                            <button
                                                onClick={() => onUpdateQuantity(cartItemIndex, -1)}
                                                className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-primary transition-colors disabled:opacity-50"
                                                disabled={quantity <= 1} // Optional: logic to remove? User asked for selector.
                                            >
                                                -
                                            </button>
                                            <span className="text-sm font-bold w-4 text-center text-primary">{quantity}</span>
                                            <button
                                                onClick={() => onUpdateQuantity(cartItemIndex, 1)}
                                                className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-primary transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => onAddToCart(product)}
                                            className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors active:scale-95"
                                            aria-label="Agregar al carrito"
                                        >
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductList;