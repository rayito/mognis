import './home.scss';
import Indice from './indice';
import MainContent from './main-content';
import Normas from './normas';
import ScheduleContent from './schedule-content';

export default function AmiguisContent() {
  return (
    <div>
      <Indice />
      <MainContent />
      <ScheduleContent />
      <Normas />
    </div>
  );
}