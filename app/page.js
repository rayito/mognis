import './home.scss';
import { Suspense } from 'react'
import InitContent from './init-content';
import Image from 'next/image';
import kokosisPic from './images/bg-image.jpeg';

export default function Home() {
  
  return (
    <main>
      <Suspense>
        <InitContent />
      </Suspense>
      <div className='image-block'>
        <Image
          src={kokosisPic}
          fill
          alt="Les Kokosis"
        />
      </div>
      <div className='map-block center'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2098.511041693763!2d-3.176546502468392!3d37.364052801021806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e2c1f335fae4f%3A0x9d6ce650a994a5c0!2sCuevas%20La%20Chumbera!5e1!3m2!1ses!2ses!4v1713879856018!5m2!1ses!2ses"></iframe>
      </div>
    </main>
  );
}