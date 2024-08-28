import { infoDto } from '../../models/info-data';
import './styles.css';

type Props =
{
   infocard: infoDto;
}

export default function InfoCard({infocard}: Props)
{
   return (
      <>
         <div className="conteiner-infocard">
            <div className="card-informacoes">
               <img src={infocard.avatar_url} alt={infocard.name}/>
               <div>
                  <h3>Informações</h3>
                  <div>
                     Perfil: <a href={infocard.html_url}></a>
                  </div>
                  <div>
                     Seguidores: <p>{infocard.followers}</p>
                  </div>
                  <div>
                     Localidade: <p>{infocard.location}</p>
                  </div>
                  <div>
                     Nome: <p>{infocard.name}</p>
                  </div>
               </div>
            </div>
         </div>
      </>      
   );
}