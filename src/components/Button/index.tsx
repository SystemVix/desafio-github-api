type Props =
{
   texto: string;
}

export default function Button({texto}: Props)
{
   return (
      <>
         <button>{texto}</button>         
      </>
   );
}