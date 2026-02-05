import React from 'react';
import { Product } from '../types';

interface CheckoutModalProps {
    cart: Product[];
    status: 'idle' | 'processing' | 'success';
    onClose: () => void;
    onPay: () => void;
    onRemoveItem: (index: number) => void;
    onUpdateQuantity: (index: number, delta: number) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cart, status, onClose, onPay, onRemoveItem, onUpdateQuantity }) => {
    // Calculate totals
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const depositAmount = total / 2;

    const [customerName, setCustomerName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [location, setLocation] = React.useState('');

    if (status === 'success') {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white animate-fade-in">
                <div className="max-w-md w-full text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <span className="material-symbols-outlined text-green-500 text-5xl">check_circle</span>
                    </div>
                    <h3 className="text-3xl font-black text-[#161216] mb-2">¡Apartado Exitoso!</h3>
                    <p className="text-gray-500 mb-8 text-lg">
                        Tu pago de <span className="font-bold text-primary">${depositAmount.toFixed(2)}</span> ha sido procesado. Tus productos han sido reservados.
                    </p>
                    <button
                        onClick={onClose}
                        className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary/90 transition-colors shadow-xl shadow-primary/20"
                    >
                        Volver a la tienda
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] bg-background-light overflow-y-auto animate-fade-in">
            <div className="min-h-screen flex flex-col md:flex-row">

                {/* Header for Mobile */}
                <div className="md:hidden sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between z-10">
                    <h2 className="text-lg font-bold">Tu Carrito ({cart.length})</h2>
                    <button onClick={onClose} className="p-2 bg-gray-100 rounded-full">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Left Side: Cart Items */}
                <div className="flex-1 p-4 md:p-12 overflow-y-auto">
                    <div className="max-w-2xl mx-auto">
                        <div className="hidden md:flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <h2 className="text-3xl font-black">Resumen de Compra</h2>
                            </div>
                            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold">
                                {cart.reduce((acc, item) => acc + (item.quantity || 1), 0)} Artículos
                            </span>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 opacity-50">
                                <span className="material-symbols-outlined text-6xl mb-4">shopping_cart_off</span>
                                <p className="text-xl font-bold">Tu carrito está vacío</p>
                                <button onClick={onClose} className="mt-4 text-primary font-bold hover:underline">Ir a comprar</button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((item, index) => (
                                    <div key={`${item.id}-${index}`} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-20 h-20 bg-accent-pink/20 rounded-xl overflow-hidden shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-center">
                                            <h4 className="font-bold text-[#161216] leading-tight mb-1">{item.name}</h4>
                                            <p className="text-xs text-gray-500 mb-2">{item.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                                                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                                        <button
                                                            onClick={() => onUpdateQuantity(index, -1)}
                                                            className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-primary disabled:opacity-50"
                                                            disabled={(item.quantity || 1) <= 1}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-bold w-4 text-center">{item.quantity || 1}</span>
                                                        <button
                                                            onClick={() => onUpdateQuantity(index, 1)}
                                                            className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-primary"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => onRemoveItem(index)}
                                                    className="text-gray-400 hover:text-red-500 text-xs font-bold flex items-center gap-1 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-sm">delete</span>
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: Payment Logic */}
                <div className="w-full md:w-[480px] bg-white border-l border-gray-100 p-6 md:p-12 flex flex-col shadow-2xl">
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-6">Detalles de Pago</h3>

                        {/* Breakdown */}
                        <div className="bg-background-light p-6 rounded-2xl space-y-3 mb-6">
                            <div className="flex justify-between text-gray-500 text-sm">
                                <span>Subtotal ({cart.reduce((acc, item) => acc + (item.quantity || 1), 0)} productos)</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="h-px bg-gray-200 my-2"></div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-[#161216]">Total del Pedido</span>
                                <span className="font-bold text-xl text-[#161216]">${total.toFixed(2)}</span>
                            </div>

                            {/* 50% Logic Highlight */}
                            <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl mt-4">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-primary font-bold text-sm uppercase tracking-wider">Monto a Pagar (50%)</span>
                                    <span className="text-primary font-black text-2xl">${depositAmount.toFixed(2)}</span>
                                </div>
                                <p className="text-xs text-primary/80 leading-tight">
                                    Pago requerido para apartar tus productos. El resto se paga contra entrega.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100 items-start mb-6">
                            <span className="material-symbols-outlined text-blue-600 text-xl shrink-0">secure</span>
                            <p className="text-xs text-blue-800 font-medium leading-relaxed">
                                Serás redirigido a Stripe para completar tu pago de forma segura.
                            </p>
                        </div>

                        {/* Delivery Form */}
                        <div className="mb-6 space-y-4">
                            <h4 className="font-bold text-[#161216]">Datos de Entrega</h4>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="Ej. María Pérez"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="Ej. 55 1234 5678"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Punto de Entrega</label>
                                <select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                                >
                                    <option value="">Selecciona un punto de entrega</option>
                                    <option value="Oxxo bastones">Oxxo bastones</option>
                                    <option value="UVM Coyoacán">UVM Coyoacán</option>
                                    <option value="Tejabanes">Tejabanes</option>
                                    <option value="Metro Chabacano Línea 2">Metro Chabacano Línea 2</option>
                                    <option value="El cuadro de Santa Mónica (Oxxo)">El cuadro de Santa Mónica (Oxxo)</option>
                                    <option value="Mundo E (Isla de Starbucks)">Mundo E (Isla de Starbucks)</option>
                                    <option value="Ayuntamiento de Tlalnepantla">Ayuntamiento de Tlalnepantla</option>
                                </select>
                            </div>
                        </div>

                        {/* Stripe Payment Button */}
                        <button
                            onClick={async () => {
                                try {
                                    // Send items with 50% price for the deposit
                                    const depositItems = cart.map(item => ({
                                        ...item,
                                        price: item.price / 2,
                                        name: `${item.name} (Apartado 50%)`,
                                        quantity: item.quantity || 1
                                    }));

                                    const response = await fetch('http://localhost:4242/create-checkout-session', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            items: depositItems,
                                            customerName,
                                            phone,
                                            location
                                        }),
                                    });

                                    const session = await response.json();

                                    if (session.url) {
                                        window.location.href = session.url;
                                    } else {
                                        console.error('No session URL returned');
                                        alert('Error al iniciar el pago. Por favor intenta de nuevo.');
                                    }
                                } catch (error) {
                                    console.error('Error connecting to stripe server:', error);
                                    alert('Error de conexión con el servidor de pagos.');
                                }
                            }}
                            disabled={status === 'processing' || cart.length === 0 || !customerName || !phone || !location}
                            className="w-full bg-[#161216] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'processing' ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Procesando...
                                </>
                            ) : (
                                <>
                                    Pagar con Stripe
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;