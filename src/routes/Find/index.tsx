import Button from "../../components/Button";
import Info from "../../components/Info";
import Search from "../../components/Search";

export default function Find()
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
               <div>
                  <Info/>
               </div>
            </section>
         </main>
      </>
   );
}