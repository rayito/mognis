import './home.scss';
import Image from 'next/image';
import mognis from './images/opengraph-image.jpg';

export default function FamilyMainContent() {
  return (
<div className='content anchor mb2' id='info-general'>
  <h2>Info general</h2>
  <p>
    Será el <strong className='large-text'>22 de junio</strong> sobre las <strong className='large-text'>18:00</strong>.
  </p>
  <p className='mb2'>
    Nos reuniremos en la <a target='_blank' href='https://maps.app.goo.gl/NLrQRFFdAr36AcXf9'>Villa María Luisa</a>, Armilla, Granada.
  </p>
  <div className='map-block center mb2'>
    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.643229693604!2d-3.6270982684711846!3d37.14729526220358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fb849ef8ecd3%3A0xd975cab51f23148e!2sCam.%20de%20Churriana%2C%2044%2C%2018100%20Armilla%2C%20Granada!5e1!3m2!1ses!2ses!4v1714047332553!5m2!1ses!2ses"></iframe>
  </div>
  <p className='mb1'>
    ¡Ojo! necesitamos un poco de información sobre ustedes. Rellenad este cortito formulario para que podamos organizarlo todo lo mejor posible. 
  </p>
  <p className='mb1 pregunticas'>
    <a target='_blank' href='https://forms.gle/X5SrFAjsLLtdwwra8'>&#128073;&#127996; Pregunticas &#128072;&#127996;</a>
  </p>
  <p className='mb1'>
    Por favor, confirmad asistencia rellenando el formulario antes del <strong className='large-text'>viernes 3 de mayo</strong>. 
  </p>
  <p className='mb2'>
    ¡Os esperamos!
  </p>
  <div className='image-block mognis mb2'>
    <Image
      src={mognis}
      layout='responsive'
      alt="Moñis"
    />
  </div>
</div>
  );
}