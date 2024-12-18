
import Title from "../app/components/title";
import TextSinistra from "./components/textsinistra";
import TextDestra from "./components/textdestra";

export default function Home() {
    return (
      <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Buongiorno Ale, come va? ho una domanda: non ho la più pallida idea di cosa la prof intendeva quando ha parlato di economia circolare */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-center w-full">
          
        <Title text="L'estensione del ciclo di vita di un prodotto by David Novelli" />

          <div className="mt-4">
            <TextSinistra testo="Buongiorno Ale, come va? ho una domanda: non ho la più pallida idea di cosa intendeva la prof quando ha parlato di economia circolare"/>

            <TextDestra testo="Ciao Dà, quando parliamo di economia circolare è estremamente complesso tracciare quando l'idea è stata concepita o da chi."/>

            <TextDestra testo="Possiamo tuttavia dire che il concetto di economia circolare è fortemente legato a varie scuole di pensiero come per esempio l'ecologia industriale, la biomimesi, o la scuola di pensiero Cradle-to-Cradle (Dalla culla alla culla) "/>

            <TextSinistra testo="E cosa sono?"/>

            <TextDestra testo="L'ecologia industriale studia come i materiali e l'energia interagiscono con i sistemi industriali"/>
            <TextDestra testo="Mentre la biomimesi studia la natura e i processi biologici allo scopo di migliorare le attività e le tecnologie umane, ad esempio il velcro è un ottimo esempio di tecnologia che è ritrovabile in numerosi insetti"/>

            <TextSinistra testo="E per quanto riguarda la cosa Dalla Culla alla Culla?"/>

            <TextDestra testo="In realtà l'appellativo è una provocazione che prende in giro il paradigma 'cradle to grave' (in italiano 'dalla culla alla tomba') che è un termine che viene usato per i prodotti ove è 'scontato' che il ciclo di vita terminerà con l'esaurimento della vita utile pertanto rendendo il prodotto un rifiuto che andrà trattato, stoccato ed eventualmente riciclato"/>
            <TextDestra testo="L'approccio cradle to cradle si contrappone al processo 'cradle to grave', e presuppone - ancor prima della fase di progettazione - analisi e riflessioni su come eliminare o ridurre al massimo l'ultima fase (la trasformazione in rifiuto) della vita di prodotti e beni."/>
            <TextDestra testo="In pratica, l'idea è quella di progettare i prodotti in modo tale che possano essere smontati e i materiali possano essere riutilizzati in modo tale da creare un ciclo di vita continuo e sostenibile"/>

            <TextSinistra testo="Ok, mi è chiaro, volevo concentrarmi sull'estensione del ciclo di vita di un prodotto, potresti spiegarmelo?"/>

            <TextDestra testo="Te lo spiego subito, quando si parla di economia circolare ci sono dei princìpi che mirano all'estensione del ciclo di vita di un prodotto, ad esempio sapevi che quando si parla di economia circolare i rifiuti non esistono?"/>

            <TextSinistra testo="Come sarebbe a dire?"/>

            <TextDestra testo="Nell'ottica dell'economia circolare I componenti biologici e tecnici di un prodotto (i nutrienti, per stare alla metafora biologica) sono progettati col presupposto di adattarsi all'interno di un ciclo dei materiali, progettato per lo smontaggio e ri-proposizione. I nutrienti biologici sono atossici e possono essere semplicemente compostati. I nutrienti tecnici - polimeri, leghe e altri materiali artificiali - sono progettati per essere utilizzati di nuovo con un dispendio di energia minimo." />
            <TextDestra testo="E non è finita qui! dato che gran parte della materia trasformata in oggetti giace inutilizzata per la maggior parte della sua vita, come per esempio i magazzini colmi di macchinari in attesa di essere dismessi, gli scatoloni in cantina pieni di vestiti con scarso valore affettivo e gli oggetti comprati e usati una volta l'anno, non ti sembra estremamente inefficiente dimenticarsene e lasciarli a prendere la polvere? L'economia circolare guarda ai processi di condivisione di prodotti e oggetti (economia collaborativa). Ad esempio un automobile giace inutilizzata per circa il 90% del suo tempo contro il 60% di un'auto del car sharing." />

            <TextSinistra testo="Va bene, ma non cè una via di mezzo che sia orientata verso una prospettiva di progettazione?" />

            <TextDestra testo="Certamente David, i concetti di Modularità, versatilità e adattabilità sono da privilegiare se si lavora verso l'economia circolare. Pertanto l'economia circolare si concentra su prodotti di più lunga durata, sviluppati per l'aggiornamento, l'invecchiamento e riparazione, considerando strategie come il design sostenibile. Diversi prodotti, materiali e sistemi, con molti collegamenti e misure sono più resistenti di fronte a shock esterni, rispetto ai sistemi costruiti solo per l'efficienza." />

            <TextSinistra testo="Grazie Ale, ora forse riesco a prendere un voto decente a sistemi e reti"/>
          </div>
        </div>
      </div>
    );
}