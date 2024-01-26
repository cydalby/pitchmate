import { FC } from "react";

const playersArray = [
  { name: "Lionel Messi", kit: "white" },
  { name: "Cristiano Ronaldo", kit: "white" },
  { name: "Neymar Jr.", kit: "white" },
  { name: "Kylian Mbappe", kit: "white" },
  { name: "Robert Lewandowski", kit: "white" },
  { name: "Mohamed Salah", kit: "coloured" },
  { name: "Harry Kane", kit: "coloured" },
  { name: "Kevin De Bruyne", kit: "coloured" },
  { name: "Sergio Ramos", kit: "coloured" },
  { name: "Eden Hazard", kit: "coloured" },
];

interface PlayerListProps {
  title: string;
  players: typeof playersArray;
}

const PlayerList: FC<PlayerListProps> = ({ title, players }) => (
  <div className="w-1/2">
    <h2 className="text-center text-lg font-[Space Grotesk] mb-2 font-bold">
      {title}
    </h2>
    <ul>
      {players.map((player, index) => (
        <li key={index} className="text-center font-mono">
          {player.name}
        </li>
      ))}
    </ul>
  </div>
);

const NextGameTile = () => (
  <div className="justify-center w-full flex flex-col text-center font-mono">
    <div className="flex flex-row">
      <PlayerList
        title="White Shirts"
        players={playersArray.filter((player) => player.kit === "white")}
      />
      <PlayerList
        title="Coloured Shirts"
        players={playersArray.filter((player) => player.kit === "coloured")}
      />
    </div>
    <div className="flex flex-row justify-center items-center mt-8 ">
      <button
        className="rounded-full py-2 px-4 bg-[#F5FF6B] text-black w-[50px] m-2"
        title="Add players"
      >
        {"+"}
      </button>
      <button
        className="rounded-full py-2 px-4 bg-[#F5FF6B] text-black w-[50px]"
        title="Confirm teams"
      >
        {"✓"}
      </button>
    </div>
  </div>
);

export default NextGameTile;
