import Button from "../../components/Button";
import Search from "../../components/Search";

export default function NotFound()
{
   return (
      <>
         <main>
            <section>
               <div>
                  <Search/>
               </div>
               <div>
                  <Button/>
               </div>
               <h2>Erro ao buscar usuário</h2>
            </section>
         </main>
      </>      
   );
}