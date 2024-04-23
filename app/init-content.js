'use client'

import './home.scss';
import { useSearchParams } from 'next/navigation'

export default function InitContent() {
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

  const getMessage = () => {
    if (celebration === "familia") {
      return `Nos ha dao por casarnos y ${getApproach()} a la cenita que vamos a organazar para celebrarlo.`;
    } else {
      return `Nos ha dao por casarnos y ${getApproach()} al fiestote que se viene en sabe dios dónde para celebrarlo.`;
    }
  }

  return (
    <div className='content'>
      <div className='salute center'>
        {getSalute()}
      </div>
      <div className='message'>
        {getMessage()}
      </div>
    </div>
  );
}