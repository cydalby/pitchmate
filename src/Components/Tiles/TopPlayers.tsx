import { FC, PropsWithChildren } from "react";
import players from "../../Data/players.json";

interface TableProps extends PropsWithChildren {
  isHeader?: boolean;
}

const TableCell: FC<TableProps> = ({ children, isHeader = false }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag
      className={`p-2 border-2 border-darkGreen ${
        isHeader ? "bg-darkGreen" : ""
      }`}
    >
      {children}
    </Tag>
  );
};

const TableRow: FC<TableProps> = ({ children, isHeader = false }) => (
  <tr className={isHeader ? "text-white" : ""}>{children}</tr>
);

const TopPlayers: FC = () => (
  <table className="w-full text-center border-collapse border-2 border-darkGreen-500 font-mono">
    <thead>
      <TableRow isHeader>
        <TableCell isHeader>#</TableCell>
        <TableCell isHeader>Top Players</TableCell>
        <TableCell isHeader>P</TableCell>
        <TableCell isHeader>W</TableCell>
        <TableCell isHeader>D</TableCell>
        <TableCell isHeader>L</TableCell>
      </TableRow>
    </thead>

    <tbody className="text-sm">
      {players.map(({ name, played, won, draw, loss }, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{played}</TableCell>
          <TableCell>{won}</TableCell>
          <TableCell>{draw}</TableCell>
          <TableCell>{loss}</TableCell>
        </TableRow>
      ))}
    </tbody>
  </table>
);

export default TopPlayers;
