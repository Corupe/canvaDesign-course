import { CinematicSlider } from '../atomic/CinematicSlider';

export const Day1 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider markdownUrl="/day1_ar.md" title="اليوم الأول" onExit={onExit} />;
};
