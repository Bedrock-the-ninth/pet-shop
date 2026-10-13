import { FaStar } from "react-icons/fa";

type StarProps = { fill: number }; // 0 to 1

const Star = ({ fill }: StarProps) => {
  return (
    <span className="relative inline-block text-xl leading-none">
      <FaStar className="text-border" />

      <span
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: `${fill * 100}%` }}
      >
        <FaStar className="text-accent shrink-0" />
      </span>
    </span>
  );
};

const Rating = ({ score }: { score: string }) => {
  const numScore = Number(score);
  return (
    <div className="flex" title={`A solid ${score}`} aria-label={`Rating: ${numScore} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} fill={Math.min(1, Math.max(0, numScore - i))} />
      ))}
    </div>
  );
};

export default Rating;
