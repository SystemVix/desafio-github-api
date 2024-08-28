import Button from "../../components/Button";
import InfoCard from "../../components/InfoCard";

export default function FindUser()
{
   return (
      <>
         <main>
            <section>
               <div>
                  <h2>Encontre um perfil Github</h2> 
               </div>
               <form>
                  <div>
                     <input
                        name="gitUser"
                        placeholder="Usuário Github"
                        type="text"
                     />
                  </div>            
               </form>
               <div>
                  <Button texto="Encontrar"/>
               </div>
               <div>
                  <InfoCard/>
               </div>
            </section>
         </main>
      </>
   );
}