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
      No os emperifolléis, no hay código de vestimenta. Venid tan cómodas como queráis. Si vais a comprar ropa, por favor que sea de segunda mano.
    </li>
    <li>
      No nos deis dineros ni licuadoras. Si os apetece tener un detalle, una planta, un libro o un vinilo siempre serán bienvenidos.
    </li>
    <li>
      Es julio en Granada y hay piscina; os animamos a traer ropa de baño y toalla. Nosotras nos vamos a bañar. Bien lo sabe dios.
    </li>
    <li>
      ¡Dadlo todo!
    </li>
  </ol>
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