import { CinematicSlider } from '../atomic/CinematicSlider';
import { dayData } from '../../data/day4';

export const Day4 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider courseData={dayData} onExit={onExit} />;
};
