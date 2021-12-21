import React, { useState, useRef } from "react";
import "./Main.css";
import { Hr } from "../Components/Hr";

export const Main = () => {
  const command = useRef("");
  const [history, setHistory] = useState("You entered a forrest.");

  console.log(command);

  return (
    <article className="main-page">
      <div className="top">
        <aside className="map">
          Map <br />
          <canvas
            id="mapCanvas"
            width="300"
            height="300"
            style={{ border: "1px solid black" }}
          ></canvas>
        </aside>
        <section className="output">
          <textarea
            className="terminal"
            rows={25}
            cols={80}
            disabled
            value={history}
          />
        </section>
        <aside className="inventory">
          Inventory: <br />
          <li>No items.</li>
        </aside>
      </div>
      <Hr />
      <div className="bottom">
        <section className="input">
          <input className="input-text" type="text" ref={command} />
          <button
            className="input-button"
            type="button"
            onClick={() => {
              command.current.value
                ? setHistory(`${history}\n\n${command.current?.value}`)
                : setHistory(`${history}\n\nYou must have something to say!`);
            }}
          >
            Enter
          </button>
        </section>
      </div>
    </article>
  );
};
