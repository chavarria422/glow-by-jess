import React from 'react';

interface NavbarProps {
    cartCount: number;
    onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
    return (
        <nav className="sticky top-0 z-50 glass-header border-b border-primary/10">
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl">flare</span>
                    <h2 className="text-[#161216] text-lg font-extrabold leading-tight tracking-tight">Glow by jess</h2>
                </div>
                <div className="flex gap-6 items-center">

                    <button
                        onClick={onOpenCart}
                        className="relative p-2 bg-primary/5 hover:bg-primary/10 rounded-full transition-colors group"
                    >
                        <span className="material-symbols-outlined text-[#161216] group-hover:text-primary transition-colors">shopping_bag</span>
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;