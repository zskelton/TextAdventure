import React from "react";

// TODO: Add Text Option

export const Hr = (
  width = "100%",
  height = "20px",
  size = "1px",
  color = "green",
  type = "solid",
  align = "left",
  text = null,
  textSize = "40px"
) => {
  // Set Styles from Props
  const styler = {
    width: width,
    height: height,
    borderBottom: `${size} ${type} ${color}`,
    textAlign: "center",
  };

  const textStyler = {
    fontSize: textSize,
    padding: "0 10px",
    backgroundColor: "grey",
  };

  return (
    <>
      <div style={styler}>
        {text ? <span style={textStyler}>{text}</span> : <span />}
      </div>
    </>
  );
};
