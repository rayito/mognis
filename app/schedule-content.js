import './home.scss';
import Image from 'next/image';

export default function ScheduleContent() {
  return (
<div className='anchor mb2' id='schedule'>
  <h2>Schedule</h2>
  <div className='schedule'>
    <div className='time'>
      <span className='day-name'>Vie</span> 
      <span className='day-number'>5 Jul</span>
    </div>
    <div className='event'>
      <h3><span className='hour'>18:00</span>  Avanzadilla</h3>
      <p>Las primeras valientes llegarán a las cuevas para el montaje y la preparación del pitoste.</p>
      <p>Cualquiera puede apuntarse a tan atractivo plan, ¡pero avisadnos!. Cenaremos, pondremos musiquita, posiblemente veamos una peli de terror clásico en un proyector y dormiremos allí. El típico plan pre-boda.</p>
    </div>

    <div className='time'>
      <span className='day-name'>Sab</span> 
      <span className='day-number'>6 Jul</span>
    </div>
    <div className='event'>
      <h3><span className='hour'>10:00</span>  Desayuno</h3>
      <p>La avanzadilla desayunará y dará los últimos retoques para esperar al resto de invitadas. Con suerte nadie tendrá resaca.</p>

      <h3><span className='hour'>12:00</span>  ¡Empezamos!</h3>
      <p>Os esperamos a todas pa la hora del vermut.</p>
      <p>Habrá una ceremonia liderada por vosotras, nos ponemos en vuestras manos.</p>
      <p>Después de la ceremonia... ¡a gosarlo fuertemente!</p>
    </div>

    <div className='time'>
      <span className='day-name'>Dom</span> 
      <span className='day-number'>7 Jul</span>
    </div>
    <div className='event'>
      <h3><span className='hour'>12:00</span>  Brunch</h3>
      <p>Dependiendo de cuándo terminemos, haremos desayuno, brunch o almuerzo, qué sabe nadie. La noche es joven y nosotras viejas.</p>
      <p>Tocará desmontar el pitoste y volver a nuestras vidas.</p>
      <p>Confiamos en que sea con una sonrisa en la cara.</p>
    </div>
  </div>
</div>
  );
}