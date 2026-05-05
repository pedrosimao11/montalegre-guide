export default function EventosPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <p className="text-amber-400 text-sm uppercase tracking-widest mb-2">
          Norte de Portugal · Tradição Viva
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Eventos & Festivais
        </h1>
        
        <div className="space-y-12">
          <EventoCard
            mes="Janeiro"
            titulo="Festa do Fumeiro"
            descricao="Prova de enchidos tradicionais, presuntos e salpicões. Os produtores locais mostram o melhor do fumeiro de Barroso."
          />
          <EventoCard
            mes="Fevereiro"
            titulo="Carnaval de Montalegre"
            descricao="Um dos carnavais mais autênticos de Portugal, com máscaras tradicionais e muita sátira social."
          />
          <EventoCard
            mes="Maio"
            titulo="Feira da Terra"
            descricao="Mostra de produtos locais, artesanato, gastronomia e espetáculos musicais. Celebra a cultura barrosã."
          />
          <EventoCard
            mes="Agosto"
            titulo="Sextas Feiras 13 – Noite das Bruxas"
            descricao="Evento único no mundo, celebrado em todas as sextas-feiras 13 do ano, com espetáculos de fogo, feitiçaria e animação de rua."
          />
          <EventoCard
            mes="Setembro"
            titulo="Feira de Artesanato"
            descricao="Artesãos locais mostram o trabalho em madeira, linho, burel e cestaria. Uma viagem às artes tradicionais."
          />
        </div>
      </div>
    </main>
  );
}

function EventoCard({ mes, titulo, descricao }: { mes: string; titulo: string; descricao: string }) {
  return (
    <div className="border-l-2 border-amber-500/50 pl-6 hover:border-amber-400 transition-colors">
      <span className="text-amber-500 text-sm font-medium">{mes}</span>
      <h3 className="text-xl font-semibold mt-1 mb-2">{titulo}</h3>
      <p className="text-neutral-400 leading-relaxed">{descricao}</p>
    </div>
  );
}
