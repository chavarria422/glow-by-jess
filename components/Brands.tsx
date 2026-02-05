import React from 'react';
import { brands } from '../data';

const Brands: React.FC = () => {
  return (
    <section className="py-8">
        <div className="px-4 mb-4 max-w-screen-xl mx-auto">
            <h3 className="text-[#161216] text-lg font-bold">Nuestras Marcas</h3>
        </div>
        <div className="max-w-screen-xl mx-auto flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
            {brands.map(brand => (
                <div key={brand.id} className="flex h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 border border-primary/5 shadow-sm hover:border-primary/20 transition-colors cursor-default">
                    <span className="font-bold text-sm text-[#816a7c]">{brand.name}</span>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Brands;