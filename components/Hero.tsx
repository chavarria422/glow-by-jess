import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 pt-6 pb-10">
        <div 
            className="max-w-screen-xl mx-auto overflow-hidden rounded-2xl relative min-h-[520px] flex items-center justify-center bg-accent-pink" 
            style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(253, 225, 243, 0.4) 0%, rgba(253, 225, 243, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnA9VZOdUulMTjdM2nUQswtAaWsjpYOyG1jgfhuIIwuMt_4hbmDeNid8xPUy_gP8XNgw-UOm3ZKlTs-YxvVLuWe2Ctn8winJOcmXJD7Zar7uUDPtpC_Yqx9plMiSVrQaOEA7rQ4LKLxoYby7De2FAgfrf9g8GuJ4-igNmYEzjvIi1ohdZm7IK6Dv6ZHyiKaZXGhXfuH-OBqmMOBRhatK4S7K7FNYY_-cR-K17fkcOyKz6upDo9ZTMg4Sk3z2KBwTz7F8Sjq27Ec3NE")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="p-8 text-center flex flex-col gap-6 items-center max-w-2xl">
                <div className="bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary border border-primary/20">
                    Premium Beauty Experience
                </div>
                <h1 className="text-[#161216] text-4xl font-black leading-tight tracking-tight md:text-6xl">
                    Realza tu Belleza con <span className="text-primary">Conocimiento</span>
                </h1>
                <p className="text-[#161216]/70 text-base md:text-lg font-medium">
                    Educación y productos premium de skincare y maquillaje con entregas en puntos medios.
                </p>
                <div className="flex gap-4">
                    <button className="bg-primary text-white font-bold h-12 px-8 rounded-xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                        Ver Colección
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;