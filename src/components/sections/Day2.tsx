import { CinematicSlider } from '../atomic/CinematicSlider';
import { dayData } from '../../data/day2';

export const Day2 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider courseData={dayData} onExit={onExit} />;
};
