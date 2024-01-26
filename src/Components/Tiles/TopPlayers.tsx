import { FC } from "react";

const players = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Neymar Jr.",
  "Kylian Mbappe",
  "Robert Lewandowski",
  "Mohamed Salah",
  "Harry Kane",
  "Kevin De Bruyne",
];

const TopPlayers: FC = () => (
  <table className="w-full text-center border-collapse border-2 border-gray-500">
    <thead>
      <tr>
        <th className="text-left p-1 border-2 border-gray-400">Player</th>
        <th className="p-1 border-2 border-gray-400">Played</th>
        <th className="p-1 border-2 border-gray-400">W</th>
        <th className="p-1 border-2 border-gray-400">D</th>
        <th className="p-1 border-2 border-gray-400">L</th>
      </tr>
    </thead>

    <tbody className="text-sm">
      {players.map((player, index) => (
        <tr key={index}>
          <td className="text-left p-1 border-2 border-gray-400">{player}</td>
          <td className="p-1 border-2 border-gray-400">3</td>
          <td className="p-1 border-2 border-gray-400">1</td>
          <td className="p-1 border-2 border-gray-400">1</td>
          <td className="p-1 border-2 border-gray-400">1</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TopPlayers;
