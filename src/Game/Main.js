/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { Hr } from "../Components/Hr";
import { gamedata } from "./Levels/Level1";
import Canvas from "./Engine/Canvas";
import "./Main.css";
import { useEffect } from "react/cjs/react.development";

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
// X - Set Name
// - Set Blank Map of Size
// X - Display Player Info
// X - Set Initial Text
// X - Load Room
// X - - Display Text
//   - - Update Map
//   - - Set Item/Enemy Variables
// | - - Receive Command
// | - - - Verb | Noun
// | - - - Go [North, East, South, West], Attack [Enemy.Name], Get [Item.Name], Help <- Display This
//   - - - Update JSON Text based on situation (enemy dies, note picked up etc.).
// |  - - - - Print Response to Command

export const Main = () => {
  // Control Updates
  const [click, update] = useState(false);

  // IO Variables
  const command = useRef("");

  const [lastCommand, setLastCommand] = useState("");

  // Game Data Variables
  const [player, setPlayer] = useState({
    name: gamedata.Player.Name,
    hp: gamedata.Player.HP,
    weapon: gamedata.Player.Weapon,
    gold: gamedata.Player.Gold,
    items: gamedata.Player.Items,
    position: gamedata.Player.Positon,
  });

  const [room, setRoom] = useState(gamedata.Rooms["0.0"]);
  const [history, setHistory] = useState(room.text_first);
  // Item List from JSON - When picked up/dropped add to JSON
  // Enemies on JSON, and store all stats on JSON.
  // JSON = Permanent
  // state = For now

  // Drawing Variables
  const [gameSize, _] = useState(gamedata.Size);
  const [locations, setLocations] = useState([]);

  // Default Sizes
  const CANVAS_SIZE = 300;
  const BUFFER = 25; // Edges of Drawing
  const SQUARE = (CANVAS_SIZE - BUFFER * 2) / gamedata.Size[0];
  const MAP = gamedata.Map;
  const [buildMap, finishMap] = useState(true);

  // Placehodlers
  let _x = 0;
  let _y = 0;
  let _h = SQUARE;
  let _w = SQUARE;
  let _locations = [];
  let color = "#ff0000";

  // Build Map on First Run
  if (buildMap) {
    for (let y = 0; y < gamedata.Size[1]; y++) {
      for (let x = 0; x < gamedata.Size[0]; x++) {
        // Set X
        _x = x * SQUARE + BUFFER;
        _y = y * SQUARE + BUFFER;
        // Set Y
        // Set Color
        switch (MAP[y][x]) {
          case "E":
            color = "green";
            break;
          case "H":
            color = "grey";
            break;
          case "X":
            color = "black";
            break;
          case "R":
            color = "brown";
            break;
          case "!":
            color = "orange";
            break;
          case "*":
            color = "red";
            break;
          default:
            color = "white";
            break;
        }
        // Place in Array
        _locations.push({ x: _x, y: _y, w: _w, h: _h, color: color });
      }
    }
    // Save Array
    setLocations(_locations);
    // Don't Run Again
    finishMap(!buildMap);
  }

  // {
  //   x: 10,
  //   y: 10,
  //   w: 10,
  //   h: 10,
  //   color: "#00ff00",
  // },

  // Handlers
  const handleSubmit = () => {
    // Add Output to Form
    setHistory(
      `${history}\n> ${command.current.value}\n\n${onInput(
        command.current.value
      )}`
    );
    // Reset Input
    setLastCommand(command.current.value);
    command.current.focus();

    // // Add New Location
    // setLocations((locations) => [
    //   ...locations,
    //   {
    //     x: 20,
    //     y: 20,
    //     w: 20,
    //     h: 20,
    //     color: "#ff0000",
    //   },
    // ]);

    // Set Players Money
    // setPlayer({ ...player, gold: player.gold + 30 });
    // update(!click);
  };

  // Command Structure
  // Verb Noun
  const onInput = (phrase) => {
    const [verb, noun] = phrase.split(" ");
    // console.log(`Verb: ${verb} | Noun: ${noun}`);
    switch (verb) {
      case "Go":
      case "go":
        switch (noun) {
          case "North":
          case "north":
          case "n":
            if (room.directions.north) {
              player.position[1] = player.position[1] - 1;
              let newRoom = `${player.position[0]}.${player.position[1]}`;
              setRoom(gamedata.Rooms[newRoom]);
              return gamedata.Rooms[newRoom].text_first;
            } else {
              return "Cannot Move North.";
            }
          case "South":
          case "south":
          case "s":
            if (room.directions.south) {
              player.position[1] = player.position[1] + 1;
              let newRoom = `${player.position[0]}.${player.position[1]}`;
              console.log(newRoom);
              setRoom(gamedata.Rooms[newRoom]);
              return gamedata.Rooms[newRoom].text_first;
            } else {
              return "Cannot Move South.";
            }
          case "East":
          case "east":
          case "e":
            if (room.directions.east) {
              player.position[0] = player.position[0] + 1;
              let newRoom = `${player.position[0]}.${player.position[1]}`;
              setRoom(gamedata.Rooms[newRoom]);
              // update(!click);
              return gamedata.Rooms[newRoom].text_first;
            } else {
              return "Cannot Move East.";
            }
          case "West":
          case "west":
          case "w":
            if (room.directions.north) {
              player.position[0] = player.position[0] - 1;
              let newRoom = `${player.position[0]}.${player.position[1]}`;
              setRoom(gamedata.Rooms[newRoom]);
              return gamedata.Rooms[newRoom].text_first;
            } else {
              return "Cannot Move North.";
            }
          default:
            return "I don't understand where you want me to go...";
        }
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
          return "not here yet";
        } else {
          return "Get What?";
        }
      case "Help":
      case "help":
      case "h":
      case "?":
        return "Commands:\nGo [North, East, South, West]\nAttack [Enemy.Name]\nGet [Item.Name]\nHelp <- Display This";
      default:
        return "You must have something valuable to say!!";
    }
  };

  // console.log(locations);

  // Game Loop
  // useEffect(() => {
  //   console.log("bump");
  // }, [click]);

  // Return Object
  return (
    <article className="main-page">
      <div className="top">
        <aside className="map">
          Map <br />
          <Canvas
            id="mapCanvas"
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
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
          Player: {player.name}
          <br />
          Hit Points: {player.hp}
          <br />
          Gold: {player.gold}
          <br />
          Weapon: {player.weapon || "None"} <br />
          <br />
          Items: <br />
          {player.items.map((item) => {
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
