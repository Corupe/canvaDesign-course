import { CinematicSlider } from '../atomic/CinematicSlider';
import { dayData } from '../../data/day3';

export const Day3 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider courseData={dayData} onExit={onExit} />;
};
