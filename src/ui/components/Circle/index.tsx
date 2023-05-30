import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Circle.scss";

interface CircleProps {
  progress: number;
  width?: string;
  height?: string;
}

const Circle: React.FC<CircleProps> = ({ progress, width, height }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        textAlign: 'center'
      }}
    >
      <CircularProgressbar
        value={progress}
        styles={{
          // Customize the root svg element
          root: {
            width: width,
            height: height,
          },
          // Customize the path, i.e. the "completed progress"
          path: {
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            transformOrigin: "center center",
          },
        }}
      />
    </div>
  );
};

export default Circle;
