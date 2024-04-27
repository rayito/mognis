import './home.scss';
import Image from 'next/image';
import cat from './images/happy-cat.gif';
import theOffice1 from './images/party-theoffice.gif';
import theOffice2 from './images/the-office-handsup.gif';
import theOffice3 from './images/theoffice-champagne.gif';


export default function Normas() {
    return (
<div className='content anchor mb2' id='normas'>
  <h2>Normas del evento</h2>
  <ol>
    <li>
      No te emperifolles, no hay código de vestimenta. Ven tan cómoda como quieras. Si vas a comprarte ropa, por favor que sea de segunda mano.
    </li>
    <li>
      No nos des dineros ni licuadoras. Si te apetece tener un detalle, una planta, un libro o un vinilo siempre serán bienvenidos.
    </li>
    <li>
      Es julio en Granada y hay piscina; si te apetece, trae ropa de baño y toalla. Nosotras nos vamos a bañar. Bien lo sabe dios.
    </li>
    <li>
      ¡Dadlo todo!
    </li>
  </ol>
  <p className='dialogue'><i>Si ves los números raros es porque están en sánscrito, así somos...</i></p>
  <div className='image-block cat mb1'>
    <Image
      src={cat}
      layout='responsive'
      alt="cat"
    />
  </div>
  <div className='image-block the-office-1 mb1'>
    <Image
      src={theOffice1}
      layout='responsive'
      alt="The Office"
    />
  </div>
  <div className='image-block the-office-2 mb1'>
    <Image
      src={theOffice2}
      layout='responsive'
      alt="The Office Hands Up"
    />
  </div>
  <div className='image-block the-office-3 mb1'>
    <Image
      src={theOffice3}
      layout='responsive'
      alt="The Office Champagne"
    />
  </div>
</div>
      );
}