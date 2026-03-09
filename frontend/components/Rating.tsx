type RatingProps = {
  selected: number;
  onSelect: (value: number) => void;
};

const STARS = [5, 4, 3, 2, 1];

export default function Rating({ selected, onSelect }: RatingProps) {
  return (
    <div className="rating section-container">
      {STARS.map((star) => (
        <label key={star} className="rating-star">
          <input
            type="radio"
            name="rating"
            checked={selected === star}
            onChange={() => onSelect(star)}
          />
          <span>{selected >= star ? "★" : "☆"}</span>
        </label>
      ))}
    </div>
  );
}
