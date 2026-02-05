import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="px-4 py-4 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap gap-4">
            <div className="flex flex-1 min-w-[160px] items-center gap-4 rounded-2xl p-4 bg-white border border-primary/5 shadow-softElevation">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Entregas</p>
                    <p className="text-lg font-bold leading-tight">Entregamos en puntos medios</p>
                </div>
            </div>
            <div className="flex flex-1 min-w-[160px] items-center gap-4 rounded-2xl p-4 bg-white border border-primary/5 shadow-softElevation">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Garantía</p>
                    <p className="text-lg font-bold leading-tight">100% Original</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Features;