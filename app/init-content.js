'use client'

import './home.scss';
import { useSearchParams } from 'next/navigation'

export default function InitContent() {
  const searchParams = useSearchParams()
  let count = 0;
  const celebration = searchParams.get('c');
  const sg = searchParams.get('sg') || 'F';
  const n1 = searchParams.get('n1') || '';
  if (n1 != '') count++;
  const n2 = searchParams.get('n2') || '';
  if (n2 != '') count++;
  const n3 = searchParams.get('n3') || '';
  if (n3 != '') count++;
  const n4 = searchParams.get('n4') || '';
  if (n4 != '') count++;

  const getSalute = () => {
    const salutes = [
      '',
      ` ${n1}`,
      ` ${n1} y ${n2}`,
      ` ${n1}, ${n2} y ${n3}`,
      ` ${n1}, ${n2}, ${n3} y ${n4}`,
    ];
    return `¡Hola${salutes[count]}!`;
  }

  const getApproach = () => {
    let youAre;
    let invited; 
    if (count === 1) {
      youAre = 'estás';
      invited = sg === 'M' ? 'invitado' : 'invitada';
    } else {
      youAre = 'estáis';
      invited = 'invitadas';
    }
    return `${youAre} ${invited}`;
  }

  const getMessage = () => {
    if (celebration === 'f') {
      return (
        <p>Somos Ana y Edén, nos ha dao por casarnos y {getApproach()} a la cenita que vamos a organizar para celebrarlo.</p>
      );
    } else {
      return (
        <p>Somos Ana y Edén, nos ha dao por casarnos y {getApproach()} al fiestote que se viene para celebrarlo.</p>
      );
    }
  }

  return (
    <div className='content'>
      <h1 className='salute'>
        {getSalute()}
      </h1>
      {getMessage()}
    </div>
  );
}