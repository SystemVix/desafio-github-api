export default function Search()
{
   return (
      <>
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
      </>      
   );
}