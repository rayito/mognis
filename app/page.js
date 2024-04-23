'use client'

import './home.scss';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Content({ approach, celebration }) {
  if (celebration === "familia") {
    return (
      <div className='content'>
        Nos ha dao por casarnos y {approach} a la cenita que vamos a organazar para celebrarlo. 
      </div>
    );
  } else {
    return (
      <div className='content'>
        Nos ha dao por casarnos y {approach} al fiestote que se viene en sabe dios dónde para celebrarlo.
      </div>
    );
  }
}

export default function Home() {
  const searchParams = useSearchParams()
  //const queryParameters = new URLSearchParams(window.location.search);
  let count = 0;
  const celebration = searchParams.get('celebration');
  const singleGender = searchParams.get('singlegender') || 'F';
  const name1 = searchParams.get('name1') || '';
  if (name1 != '') count++;
  const name2 = searchParams.get('name2') || '';
  if (name2 != '') count++;
  const name3 = searchParams.get('name3') || '';
  if (name3 != '') count++;
  const name4 = searchParams.get('name4') || '';
  if (name4 != '') count++;

  const getSalute = () => {
    const salutes = [
      '',
      ` ${name1}`,
      ` ${name1} y ${name2}`,
      ` ${name1}, ${name2} y ${name3}`,
      ` ${name1}, ${name2}, ${name3} y ${name4}`,
    ];
    return `¡Hola${salutes[count]}!`;
  }

  const getApproach = () => {
    let youAre;
    let invited; 
    if (count === 1) {
      youAre = 'estás';
      invited = singleGender === 'M' ? 'invitado' : 'invitada';
    } else {
      youAre = 'estáis';
      invited = 'invitadas';
    }
    return `${youAre} ${invited}`;
  }

  return (
    <main>
      <Suspense>
        <div className='salute center'>
          {getSalute()} <br></br>
        </div>
      </Suspense>
      <Suspense>
        <Content
          approach={getApproach()}
          celebration={celebration}
        />
      </Suspense>
      <div>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2098.511041693763!2d-3.176546502468392!3d37.364052801021806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e2c1f335fae4f%3A0x9d6ce650a994a5c0!2sCuevas%20La%20Chumbera!5e1!3m2!1ses!2ses!4v1713879856018!5m2!1ses!2ses"></iframe>
      </div>
    </main>
  );
}
