import type { Memory } from "@/lib/memories";
import styles from "./PhotoPin.module.css";

const MAX_LAYERS = 3;

const dateFormat = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

// Берём только дату из строки, чтобы часовой пояс зрителя не сдвинул день
const formatDay = (takenAt: string) => dateFormat.format(new Date(takenAt.slice(0, 10)));

interface PhotoPinProps {
  memory: Memory;
  selected: boolean;
  onSelect: () => void;
}

export const PhotoPin = ({ memory, selected, onSelect }: PhotoPinProps) => {
  const layers = memory.photos.slice(0, MAX_LAYERS);

  return (
    <button
      type="button"
      className={styles.pin}
      aria-label={`${memory.title}, ${formatDay(memory.photos[0].takenAt)}`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      {layers
        .map((photo, index) => (
          <img
            key={photo.src}
            src={photo.src}
            alt=""
            className={styles.photo}
            data-layer={index}
            draggable={false}
            decoding="async"
          />
        ))
        .reverse()}
    </button>
  );
};
