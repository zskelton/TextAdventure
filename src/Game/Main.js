import React, { useState, useRef } from "react";
import "./Main.css";
import { Hr } from "../Components/Hr";
const gamedata = require("../Game/Levels/level1.json");

export const Main = () => {
  // Variables
  const command = useRef("");
  const [history, setHistory] = useState("You entered a forrest. You see a note.");
  const [lastCommand, setLastCommand] = useState("");
  const [inventory, setInventory] = useState([]);

  console.log(gamedata);

  /*

    "Game": {
    "Name": "Zack's Adventure",
    "Size": [5, 5],
    "Player": {
      "Name": "Zack",
      "HP": 30,
      "Weapon": null,
      "Gold": 0,
      "Items": {}
    },
    "Rooms": [
    {
      "name": "Entryway",
      "text_first": "You are in a forrest with a cave entrance directly to your east. You see a note on the ground.",
      "text_long": "You are in a forrest with a cave entrance directly to your east.",
      "text_short": "You are at the entryway of a cave.",
      "x": 0,
      "y": 0,
      "directions": {
        "north": false,
        "east": true,
        "south": false,
        "west": false
      },
      "items": [
        {
          "name": "note",
          "message": "You picked up a note saying 'Hi traveller!'"
        }
      ],
      "enemies": [],
      "isEnd": false
    },

  */


  // Load Game
  // - Set Name
  // - Set Blank Map of Size
  // - Display Player Info
  // - Set Initial Text
  // - Load Room
  // - - Display Text
  // - - Update Map
  // - - Set Item/Enemy Variables
  // - - Receive Command
  // - - - Verb | Noun
  // - - - Go [North, East, South, West], Attack [Enemy.Name], Get [Item.Name], Help <- Display This
  // - - - Update JSON Text based on situation (enemy dies, note picked up etc.).
  // - - - - Print Response to Command

  // Handlers
  const handleSubmit = () => {
    // Add Output to Form
    setHistory(`${history}\n\n${onInput(command.current.value)}`);
    // Reset Input
    setLastCommand(command.current.value);
    command.current.focus();
  }


  // Command Structure
  // Verb Noun
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
          Player: {gamedata.Player.Name}<br />
          Hit Points: {gamedata.Player.HP}<br />
          Gold: {gamedata.Player.Gold}<br />
          Weapon: {gamedata.Player.Weapon || "None"} <br />
          <br />
          Items: <br />
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
