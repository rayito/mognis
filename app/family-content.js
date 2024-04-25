import FamilyIndice from './f-indice';
import FamilyMainContent from './f-main-content';
import FamilyNormas from './f-normas';
import './home.scss';

export default function FamilyContent() {
  return (
    <div>
      <FamilyIndice />
      <FamilyMainContent />
      <FamilyNormas />
    </div>
  );
}