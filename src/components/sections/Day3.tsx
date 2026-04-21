import { CinematicSlider } from '../atomic/CinematicSlider';

export const Day3 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider markdownUrl="/day3_ar.md" title="اليوم الثالث" onExit={onExit} />;
};
