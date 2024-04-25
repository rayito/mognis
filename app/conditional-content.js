'use client'

import './home.scss';
import { useSearchParams } from 'next/navigation'
import FamilyContent from './family-content';
import AmiguisContent from './amiguis-content';

export default function ConditionalContent() {
  const searchParams = useSearchParams()
  const celebration = searchParams.get('c');

  /* 
  param c = celebration
  value f = family
  */
  const getContent = () => {
    return celebration == 'f' ? <FamilyContent /> : <AmiguisContent />;
  }
  
  return getContent();
}