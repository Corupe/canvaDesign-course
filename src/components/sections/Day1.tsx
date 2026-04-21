import { CinematicSlider } from '../atomic/CinematicSlider';
import { dayData } from '../../data/day1';

export const Day1 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider courseData={dayData} onExit={onExit} />;
};
