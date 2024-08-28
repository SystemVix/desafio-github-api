import './styles.css';
import Button from "../../components/Button";
import InfoCard from '../../components/InfoCard';

export default function FindUser()
{
   return (
      <>
         <main>
            <section>
               <div className="conteiner-finduser">
                  <div className="ml31">
                     <h2 className='titulo-finduser'>Encontre um perfil Github</h2> 
                  </div>
                  <form>
                     <div className="ml31">
                        <input
                           className="input-finduser"
                           name="gitUser"
                           placeholder="Usuário Github"
                           type="text"
                        />
                     </div>            
                  </form>
                  <div className="ml31">
                     <Button texto="Encontrar"/>
                  </div>
               </div>               
               <div>
                  
                  
               </div>
            </section>
         </main>
      </>
   );
}