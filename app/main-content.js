import './home.scss';
import Image from 'next/image';
import frodo from './images/frodo-its-done.gif';

export default function MainContent() {
    return (
<div className='content anchor mb2' id='info-general'>
    <h2>Info general</h2>
    <p>
        Será el fin de semana del <strong>5 al 7 de julio</strong>.
    </p>
    <p className='dialogue'>
        <i>Espera... ¿cómo que el <strong>fin de semana</strong>? qué es esto, ¿una boda gitana?</i>
    </p>
    <p>
        &#128527; ...no sé, ¿esperábais otra cosa?.
    </p>
    <p>
        Hemos buscado un sitio maravilloso para celebrarlo. Nos lo vamos a pasar como enanos. De verdad, va a ser la hostia. Está un poco lejos, pero nah merece la pena, de verdad...
    </p>
    <p className='dialogue'>
        <i>Cúchame... ¿cómo de lejos?</i>
    </p>
    <p className='mb2'>
        Lejillos. A 14 horas a pie desde Armilla, pero vaya, na comparao con lo que hizo Frodo y él no iba a una fiesta.
    </p>
    <div className='image-block mb2'>
        <Image
        src={frodo}
        layout='responsive'
        alt="Frodo"
        />
    </div>
    <p className='mb2'>
        ...aunque igual alguien acaba como Frodo al final del finde.
    </p>
    <p className='mb1'>
        El lugar se llama <a target='_blank' href='https://maps.app.goo.gl/5q8sz7LWvCW8RW8K7'>Cuevas La Chumbera</a>, a 3 minutos de Benalúa de Guadíx. 
    </p>
    <div className='map-block center mb1'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2098.511041693763!2d-3.176546502468392!3d37.364052801021806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e2c1f335fae4f%3A0x9d6ce650a994a5c0!2sCuevas%20La%20Chumbera!5e1!3m2!1ses!2ses!4v1713879856018!5m2!1ses!2ses"></iframe>
    </div>
    <p>
        Y... sí. Son cuevas. Cuevas granaínas. Vamos a dormir en cuevas granaínas &#128525;
    </p>
</div>
      );
}