import { useEffect } from "react";
import "./draw_canvas";

export default function MenuItem(props) {

  useEffect(() => {

  }, []);

  return (
    <>
      <a-assets>
        <canvas id="my-canvas" width="500" height="100"></canvas>
      </a-assets>

      <a-plane className="clickable" material="src: #my-canvas; transparent: true"
        animation={`property: position; to: ${props.x} ${props.y - 0.225 * props.pos} -2; dur: 2000; easing: linear; loop: false`}
        position={`${props.x} ${props.y} -2`} scale="1 0.2 0" draw-canvas></a-plane>
    </>
  );
}