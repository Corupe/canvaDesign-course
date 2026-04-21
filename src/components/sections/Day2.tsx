import { CinematicSlider } from '../atomic/CinematicSlider';

export const Day2 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider markdownUrl="/day2_ar.md" title="اليوم الثاني" onExit={onExit} />;
};
