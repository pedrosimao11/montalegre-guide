import Link from "next/link";

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <p className="text-amber-400 text-sm uppercase tracking-widest mb-2">
          Terra de Barroso · Memória Viva
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          História & Cultura
        </h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-amber-400">
              Origens Medievais
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Montalegre remonta à Alta Idade Média, com os primeiros povoados a procurarem 
              refúgio nestas terras agrestes entre montanhas. O nome — "monte alegre" — evoca 
              as encostas verdes e a paisagem que, apesar de austera, encantou gerações.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-amber-400">
              O Foral de D. Afonso III
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Em 1273, D. Afonso III concedeu foral à vila, integrando-a no reino e dando-lhe 
              direitos e deveres próprios. O castelo, construído por D. Dinis no século XIV, 
              domina ainda hoje a paisagem com as suas quatro torres e a imponente torre de menagem.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-amber-400">
              Terra de Bruxas e Feiticeiras
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Montalegre é conhecida pelas suas lendas de bruxas. As sextas-feiras 13 — dia 
              tradicionalmente associado ao azar — são celebradas com um festival único: 
              a Noite das Bruxas, com espetáculos de fogo, feitiçaria e a figura icónica 
              do "Padre Fontes", estudioso das tradições mágicas da região.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-amber-400">
              Chegas de Bois — Tradição Ancestral
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              As Chegas de Bois são uma tradição milenar do povo barrosão. Muito mais do que 
              um combate entre animais, são um símbolo de identidade, resistência e comunhão 
              com a terra. Um espetáculo de força bruta que ecoa pelas montanhas e atrai 
              forasteiros de todo o país.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-amber-400">
              Cultura Barrosã
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              O burel, as capas de honra, os chocalhos artesanais e a gastronomia rica 
              (cabrito assado, fumeiro, mel) formam uma cultura profundamente enraizada 
              na terra. Montalegre é um dos últimos redutos de uma ruralidade autêntica 
              em Portugal.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
