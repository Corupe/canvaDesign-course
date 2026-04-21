import { CinematicSlider } from '../atomic/CinematicSlider';

export const Day4 = ({ onExit }: { onExit: () => void }) => {
  return <CinematicSlider markdownUrl="/day4_ar.md" title="اليوم الرابع" onExit={onExit} />;
};
