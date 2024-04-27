import './home.scss';
import carlton from './images/carlton.gif';
import Image from 'next/image';

export default function FamilyNormas() {
    return (
<div className='content anchor mb2' id='normas'>
  <h2>Normas del evento</h2>
  <ol className='mb2'>
    <li>
      No os emperifolléis, no hay código de vestimenta. Venid tan cómodas como queráis. Si vais a comprar ropa, por favor que sea de segunda mano.
    </li>
    <li>
      No nos deis dineros ni licuadoras. Si os apetece tener un detalle, una planta, un libro o un vinilo siempre serán bienvenidos.
    </li>
    <li>
      Es junio en Granada y hay piscina; os animamos a que traigáis ropa de baño y toalla. Nosotras nos vamos a bañar.
    </li>
    <li>
      ¡Relax y pasadlo bien!
    </li>
  </ol>
  <div className='image-block carlton-gif mb2'>
    <Image
      src={carlton}
      layout='responsive'
      alt="Carlton"
    />
  </div>
</div>
      );
}