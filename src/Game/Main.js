import React, { useState, useRef } from "react";

const style = {
  top: {
    minHeight: "500px",
    columnCount: 3,
  },
  map: {
    border: "1px solid black",
    textAlign: "center",
  },
  output: {
    border: "1px solid black",
    textAlign: "left",
  },
  terminal: {
    color: "white",
    backgroundColor: "black",
  },
  inventory: {
    border: "1px solid black",
    textAlign: "center",
  },
  bottom: {
    minHeight: "50px",
    columnCount: 1,
  },
  input: {
    border: "1px solid black",
    textAlign: "left",
  },
  inputText: {
    width: "80%",
    padding: "10px",
    margin: "20px",
    color: "white",
    backgroundColor: "black",
  },
  inputButton: {
    width: "10%",
    padding: "10px",
    margin: "20px",
    color: "white",
    backgroundColor: "#165516",
  },
};

export const Main = () => {
  const command = useRef("");
  const [history, setHistory] = useState("You entered a forrest.");
  // eslint-disable-next-line no-unused-vars
  let test = "test";

  return (
    <article className="main-page">
      <div style={style.top}>
        <aside style={style.map}>
          Map <br />
          <canvas
            id="mapCanvas"
            width="300"
            height="300"
            style={{ border: "1px solid black" }}
          ></canvas>
        </aside>
        <section style={style.output}>
          <textarea
            style={style.terminal}
            rows={25}
            cols={80}
            disabled
            value={history}
          />
        </section>
        <aside style={style.inventory}>
          Inventory: <br />
          <li>No items.</li>
        </aside>
      </div>
      <hr />
      <div style={style.bottom}>
        <section style={style.input}>
          <input style={style.inputText} type="text" ref={command} />
          <button
            style={style.inputButton}
            type="button"
            onClick={() => {
              setHistory(`${history}\n\n${command.current?.value}`);
              command.current = "";
            }}
          >
            Enter
          </button>
        </section>
      </div>
    </article>
  );
};
