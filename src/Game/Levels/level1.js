export const gamedata = {
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
    {
      "name": "Hallway",
      "text_first": "Entering the cave, you see torches lining the way. Going south is the only option.",
      "text_long": "You are at the cave entrance on the northern end of a hallway.",
      "text_short": "You are just inside the mouth of the cave.",
      "x": 1,
      "y": 0,
      "directions": {
        "north": false,
        "east": false,
        "south": true,
        "west": true
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 2,
      "y": 0,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 3,
      "y": 0,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 4,
      "y": 0,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 0,
      "y": 1,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "Hallway",
      "text_first": "You are still in a long north/south hallway. On the ground you see a key and to the east is a locked door.",
      "text_long": "You are in a north/south hallway with a door to the east.",
      "text_short": "You are in a north/south hallway.",
      "x": 1,
      "y": 1,
      "directions": {
        "north": true,
        "east": false,
        "south": true,
        "west": false
      },
      "items": [
        {
          "name": "key",
          "message": "You now have a key!"
        }
      ],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "Locked Room",
      "text_first": "You enter a dark, dungy room. There is no exit but the door you came in. In the corner, you see a sword.",
      "text_long": "You are in an unlocked room. The door to the west is the only exit.",
      "text_short": "In a dark room, with only exit to the west.",
      "x": 2,
      "y": 1,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": true
      },
      "items": [
        {
          "name": "sword",
          "message": "Finally, you can defend yourself!"
        }
      ],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 3,
      "y": 1,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 4,
      "y": 1,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 0,
      "y": 2,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "Hallway",
      "text_first": "You are still in a long north/south hallway.",
      "text_long": "You are in a north/south hallway with a door to the east.",
      "text_short": "You are in a north/south hallway.",
      "x": 1,
      "y": 2,
      "directions": {
        "north": true,
        "east": false,
        "south": true,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 2,
      "y": 2,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 3,
      "y": 2,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 4,
      "y": 2,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 0,
      "y": 3,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "Hallway",
      "text_first": "You are at the end of a long hallway. It now turns to the east. You can hear a strange moaning ahead.",
      "text_long": "You are at the southern end of a hallway. It continues east... towards the moaning sound.",
      "text_short": "The hallway turns to the east.",
      "x": 1,
      "y": 3,
      "directions": {
        "north": true,
        "east": true,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "Boss Room",
      "text_first": "You enter the boss room and see a giant cat. It hisses at you and you feel that an attack is all that you can do.",
      "text_long": "You are in the boss room. Until the boss is dead, you can only escape to the west.",
      "text_short": "You are in the boss room.",
      "x": 2,
      "y": 3,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": true
      },
      "items": [],
      "enemies": [
        {
          "name": "Lola",
          "hp": 20,
          "attack": 5,
          "defense": 1
        }
      ],
      "isEnd": false
    },
    {
      "name": "Treasure Room",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 3,
      "y": 3,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": true
      },
      "items": [
        {
          "name": "gold",
          "message": "You are filthy rich now!"
        }
      ],
      "enemies": [],
      "isEnd": true
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 4,
      "y": 3,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 0,
      "y": 4,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 1,
      "y": 4,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 2,
      "y": 4,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 3,
      "y": 4,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    },
    {
      "name": "..",
      "text_first": "..",
      "text_long": "..",
      "text_short": "..",
      "x": 4,
      "y": 4,
      "directions": {
        "north": false,
        "east": false,
        "south": false,
        "west": false
      },
      "items": [],
      "enemies": [],
      "isEnd": false
    }
  ]}
};