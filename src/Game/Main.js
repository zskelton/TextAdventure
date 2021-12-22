/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "./Main.css";
import { Hr } from "../Components/Hr";
import { gamedata } from "./Levels/Level1";
import Canvas from "./Engine/Canvas";

export const Main = () => {
  // Variables
  const command = useRef("");
  // const textarea = useRef("");
  const [history, setHistory] = useState("");
  const [lastCommand, setLastCommand] = useState("");
  const [player, setPlayer] = useState(gamedata.Player);
  const [room, setRoom] = useState(gamedata.Rooms);
  const [locations, setLocations] = useState([
    {
      x: 10,
      y: 10,
      w: 10,
      h: 10,
      color: "#00ff00",
    },
  ]);

  console.log(locations);

  /*

    "Game": {
    "Name": "Zack's Adventure",
    "Size": [5, 5],
    "Player": {
      "Name": "Zack",
      "HP": 30,
      "Weapon": null,
      "Gold": 0,
      "Items": {},
      "Position": [0,0]
    },
    "Rooms": [
    {
      "name": "Entryway",
      "text_first": "You are in a forrest with a cave entrance directly to your east. You see a note on the ground.",
      "text_long": "You are in a forrest with a cave entrance directly to your east.",
      "text_short": "You are at the entryway of a cave.",
      "pos", [0,0],
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

    setLocations((locations) => [
      ...locations,
      {
        x: 20,
        y: 20,
        w: 20,
        h: 20,
        color: "#ff0000",
      },
    ]);
  };

  // Command Structure
  // Verb Noun
  const onInput = (phrase) => {
    const [verb, noun] = phrase.split(" ");
    console.log(`Verb: ${verb} | Noun: ${noun}`);
    switch (verb) {
      case "Go":
      case "go":
        switch (noun) {
          case "North":
          case "north":
          case "n":
            // go north
            break;
          case "South":
          case "south":
          case "s":
            // go south
            break;
          case "East":
          case "east":
          case "e":
            // go east
            break;
          case "West":
          case "west":
          case "w":
            // go west
            break;
          default:
            return "I don't understand where you want me to go...";
        }
        break;
      case "Attack":
      case "attack":
        // Check Enemey exists
        // Else
        return "No enemy in the room.";
      // if (noun) {
      //   // Check That Enemy in Room
      //   // Else
      //   return "No one to attack."
      // } else {
      //   return "You didn't say who to attack.";
      // }
      case "Get":
      case "get":
        if (noun) {
          // Check Item in Room
          // If in, room, transfer to inventory and return message.
          // If not, notify user.
          // let _ply = {...player};
          // _ply.Items.push("Note");
          // setPlayer({...player, ..._ply.Items});
          // return "Picked up note.";
        } else {
          return "Get What?";
        }
        break;
      case "Help":
      case "help":
      case "h":
      case "?":
        return "Commands:\nGo [North, East, South, West]\nAttack [Enemy.Name]\nGet [Item.Name]\nHelp <- Display This";
      default:
        return "You must have something valuable to say!!";
    }
  };

  // Return Object
  return (
    <article className="main-page">
      <div className="top">
        <aside className="map">
          Map <br />
          <Canvas
            id="mapCanvas"
            width="300"
            height="300"
            style={{ border: "1px solid black" }}
            locations={locations || []}
          />
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
          Player: {player.Name}
          <br />
          Hit Points: {player.HP}
          <br />
          Gold: {player.Gold}
          <br />
          Weapon: {player.Weapon || "None"} <br />
          <br />
          Items: <br />
          {player.Items.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </aside>
      </div>
      <Hr />
      {/* Select Previous Command with 'ArrowUp' - Accept Enter */}
      <div
        className="bottom"
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") {
            command.current.value = lastCommand;
          } else if (e.key === "Enter") {
            handleSubmit();
            command.current.value = "";
          }
        }}
      >
        <section className="input">
          <input className="input-text" type="text" ref={command} />
          <button
            className="input-button"
            type="button"
            onClick={() => {
              handleSubmit();
              command.current.value = "";
            }}
          >
            Enter
          </button>
        </section>
      </div>
    </article>
  );
};
