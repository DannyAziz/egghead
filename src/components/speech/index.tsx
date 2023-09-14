import { TypeAnimation } from "react-type-animation";

import Left from "./components/left";
import Right from "./components/right";
import BottomMiddle from "./components/bottomMiddle";
import BottomLeft from "./components/bottomLeft";
import BottomRight from "./components/bottomRight";

const LeftSpeech = ({
  fact,
  onFinished,
}: {
  fact: string;
  onFinished: () => void;
}) => {
  return (
    <div className="w-[300px] sm:w-[600px] absolute right-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <TypeAnimation
        sequence={[fact, () => onFinished()]}
        wrapper="p"
        cursor={true}
        repeat={0}
        className="absolute max-w-[450px] top-1/3 left-6 z-50"
      />
      <Left />
    </div>
  );
};

const RightSpeech = ({
  fact,
  onFinished,
}: {
  fact: string;
  onFinished: () => void;
}) => {
  return (
    <div className="w-[300px] sm:w-[600px] absolute left-1/4 top-1/2 translate-x-1/2 -translate-y-1/2">
      <TypeAnimation
        sequence={[fact, () => onFinished()]}
        wrapper="p"
        cursor={true}
        repeat={0}
        className="absolute max-w-[400px] top-1/3 left-6 z-50"
      />
      <Right />
    </div>
  );
};

const Middle = ({
  fact,
  onFinished,
  side,
}: {
  fact: string;
  onFinished: () => void;
  side: "bottomMiddle" | "bottomLeft" | "bottomRight";
}) => {
  return (
    <div className="w-[300px] sm:w-[600px] h-[200px] sm:h-auto relative">
      <TypeAnimation
        sequence={[fact, () => onFinished()]}
        wrapper="p"
        cursor={true}
        repeat={0}
        className="absolute max-w-[400px] top-1/3 left-6 z-50 p-4 text-xs sm:text-base"
      />
      <div className="invisible sm:visible">
        {side === "bottomMiddle" ? (
          <BottomMiddle />
        ) : side === "bottomLeft" ? (
          <BottomLeft />
        ) : (
          <BottomRight />
        )}
      </div>

    </div>
  );
};

const Speech = ({
  fact,
  onFinished,
  side,
}: {
  fact: string;
  onFinished: () => void;
  side: "left" | "right" | "bottomMiddle" | "bottomLeft" | "bottomRight";
}) => {
  switch (side) {
    case "left":
      return <LeftSpeech fact={fact} onFinished={onFinished} />;
    case "right":
      return <RightSpeech fact={fact} onFinished={onFinished} />;
    default:
      return <Middle fact={fact} onFinished={onFinished} side={side} />;
  }
};

export default Speech;
