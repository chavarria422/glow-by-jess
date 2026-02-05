import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="px-4 py-4 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 rounded-2xl p-4 bg-white border border-primary/5 shadow-softElevation">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                        <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Entregas</p>
                        <p className="text-sm md:text-lg font-bold leading-tight text-[#161216]">Entregamos en puntos medios</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl p-4 bg-white border border-primary/5 shadow-softElevation">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                        <span className="material-symbols-outlined">verified_user</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Garantía</p>
                        <p className="text-sm md:text-lg font-bold leading-tight text-[#161216]">100% Original</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;