import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Setup for Drawing
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear Screen
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    // Add All Locations
    if (props.locations.length > 0) {
      props.locations.forEach((loc) => {
        context.fillStyle = loc.color;
        context.fillRect(loc.x, loc.y, loc.w, loc.h);
      });
    }
  }, [props.locations]);

  // Return Canvas Object
  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
