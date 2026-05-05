export default function ComoChegarPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <p className="text-amber-400 text-sm uppercase tracking-widest mb-2">
          Norte de Portugal · No Coração de Barroso
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Como Chegar
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <RotaCard
            icone="🚗"
            titulo="De Carro"
            descricao="A24 (via Vila Real), depois N103 até Montalegre. Cerca de 1h30 desde o Porto."
          />
          <RotaCard
            icone="🚌"
            titulo="Autocarro"
            descricao="Ligações regulares desde Braga, Vila Real e Chaves. Consulte horários da Rodonorte."
          />
          <RotaCard
            icone="✈️"
            titulo="Avião"
            descricao="Aeroporto Francisco Sá Carneiro (Porto) a 140 km. Depois carro ou autocarro."
          />
          <RotaCard
            icone="🚂"
            titulo="Comboio"
            descricao="Estação mais próxima: Régua (Linha do Douro). Depois autocarro ou táxi."
          />
        </div>
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">📍 Mapa Interativo</h2>
          <div className="aspect-video bg-neutral-800 rounded flex items-center justify-center text-neutral-500">
            {/* Substitua por um iframe do Google Maps quando tiver */}
            <p>Mapa será carregado aqui</p>
            <p className="text-sm mt-2">Coordenadas: 41.8237° N, 7.7975° W</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function RotaCard({ icone, titulo, descricao }: { icone: string; titulo: string; descricao: string }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-amber-500/30 transition-colors">
      <span className="text-3xl">{icone}</span>
      <h3 className="text-lg font-semibold mt-3 mb-2">{titulo}</h3>
      <p className="text-neutral-400">{descricao}</p>
    </div>
  );
}
