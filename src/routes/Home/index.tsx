import './styles.css';
import Button from "../../components/Button";

export default function Home()
{
   return (
      <>
         <main>
            <section className="conteiner-home">
               <div>
                  <h2 className="titulo-home">Desafio Github API</h2>
                  <h3 className="subtitulo-home">DevSuperior - Escola de programação</h3>
               </div>
               <div>
                  <Button texto="Começar"/>
               </div>
            </section>
         </main>
      </>      
   );
}