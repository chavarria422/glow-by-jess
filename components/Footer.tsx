import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1A1B] text-white px-6 py-12">
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-10">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary text-3xl">flare</span>
                        <h2 className="text-xl font-extrabold leading-tight tracking-tight">Glow by jess</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Tu destino premium para educación y productos de belleza de alta gama. Elevamos tu rutina a un nivel profesional.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Tienda</h4>
                        <a className="text-gray-400 text-sm hover:text-white transition-colors" href="#">Maquillaje</a>
                        <a className="text-gray-400 text-sm hover:text-white transition-colors" href="#">Skincare</a>
                        <a className="text-gray-400 text-sm hover:text-white transition-colors" href="#">Sets</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Info</h4>
                        <a className="text-gray-400 text-sm hover:text-white transition-colors" href="#">Envíos</a>
                        <a className="text-gray-400 text-sm hover:text-white transition-colors" href="#">Contacto</a>
                        <a className="text-gray-400 text-sm hover:text-white transition-colors" href="#">Sobre Nosotros</a>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6">
                    <div className="flex gap-4">
                        <a className="bg-white/5 p-3 rounded-full hover:bg-primary/20 transition-colors" href="#">
                            <span className="material-symbols-outlined text-xl">share</span>
                        </a>
                        <a className="bg-white/5 p-3 rounded-full hover:bg-primary/20 transition-colors" href="#">
                            <span className="material-symbols-outlined text-xl">camera_alt</span>
                        </a>
                        <a className="bg-white/5 p-3 rounded-full hover:bg-primary/20 transition-colors" href="#">
                            <span className="material-symbols-outlined text-xl">chat_bubble</span>
                        </a>
                    </div>
                    <p className="text-gray-500 text-xs text-center font-medium">
                        © 2024 Glow by jess Beauty. Todos los derechos reservados.<br/>
                        Diseñado para la excelencia en belleza.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;