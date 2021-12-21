import React, { useState, useRef } from "react";
import "./Main.css";
import { Hr } from "../Components/Hr";

export const Main = () => {
  // Variables
  const command = useRef("");
  const [history, setHistory] = useState("You entered a forrest. You see a note.");
  const [lastCommand, setLastCommand] = useState("");
  const [inventory, setInventory] = useState([]);

  // Handlers
  const handleSubmit = () => {
    // Add Output to Form
    setHistory(`${history}\n\n${onInput(command.current.value)}`);
    // Reset Input
    setLastCommand(command.current.value);
    command.current.focus();
  }

  const onInput = command => {
    switch (command) {
      case "Go North":
        return "Cannot Go north.";
      case "Attack":
        return "Attack what?";
      case "Get Note":
        let _inv = [...inventory];
        _inv.push('Note');
        setInventory(_inv);
        return "Picked up note.";
      default:
        return "You must have something valuable to say!!";
    }
  }

  // Return Object
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
          {inventory.map((item) => {
            return(
              <li key={item}>{item}</li>
            );
          })

          }
        </aside>
      </div>
      <Hr />
      {/* Select Previous Command with 'ArrowUp' - Accept Enter */}
      <div className="bottom" onKeyDown={e =>{
        if(e.key === "ArrowUp") { command.current.value = lastCommand }
        else if(e.key === "Enter") { handleSubmit(); command.current.value = ""; }
      }}>
        <section className="input">
          <input className="input-text" type="text" ref={command} />
          <button
            className="input-button"
            type="button"
            onClick={() => {
              handleSubmit(); command.current.value = "";
            }}>
            Enter
          </button>
        </section>
      </div>
    </article>
  );
};
