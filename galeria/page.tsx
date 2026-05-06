export default function GaleriaPage() {
  const fotos = [
    { src: "/api/placeholder/800/600", alt: "Castelo de Montalegre", legenda: "Castelo de D. Dinis" },
    { src: "/api/placeholder/800/600", alt: "Serra do Larouco", legenda: "Serra do Larouco ao amanhecer" },
    { src: "/api/placeholder/800/600", alt: "Albufeira do Alto Rabagão", legenda: "Albufeira do Alto Rabagão" },
    { src: "/api/placeholder/800/600", alt: "Igreja Matriz", legenda: "Igreja Matriz de Montalegre" },
    { src: "/api/placeholder/800/600", alt: "Chega de Bois tradicional", legenda: "Chegas de Bois – Tradição Ancestral" },
    { src: "/api/placeholder/800/600", alt: "Noite das Bruxas", legenda: "Sexta-feira 13 – Noite das Bruxas" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <p className="text-amber-400 text-sm uppercase tracking-widest mb-2">
          Norte de Portugal · Imagens que Contam Histórias
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Galeria de Fotos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((foto, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all">
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm text-neutral-300">{foto.legenda}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-neutral-500 mt-8 text-sm">
          📸 Em breve: galeria com fotos reais de Montalegre. Substitua as imagens placeholder pelas suas.
        </p>
      </div>
    </main>
  );
}
