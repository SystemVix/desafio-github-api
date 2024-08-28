import FindUser from "..";
import Button from "../../../components/Button";

export default function NotFound()
{
   return (
      <>
         <main>
            <section>
               <div>
                  <FindUser/>
               </div>
               <div>
                  <Button texto="Encontrar"/>
               </div>
               <h2>Erro ao buscar usuário</h2>
            </section>
         </main>
      </>      
   );
}