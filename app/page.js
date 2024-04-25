import './home.scss';
import { Suspense } from 'react'
import InitContent from './init-content';
import Image from 'next/image';
import kokosisPic from './images/bg-image.jpg';
import ConditionalContent from './conditional-content';

export default function Home() {
  
  return (
    <main>
      <Suspense>
        <InitContent />
      </Suspense>
      <div className='image-block kokosis-pic'>
        <Image
          src={kokosisPic}
          fill
          alt="Les Kokosis"
        />
      </div>
      <ConditionalContent />
    </main>
  );
}