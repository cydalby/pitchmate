import { FC, PropsWithChildren } from "react";
import NextGameTile from "./Tiles/NextGameTile";
import TopPlayers from "./Tiles/TopPlayers";
import GameAdmin from "./Tiles/GameAdmin";

interface GridItemProps extends PropsWithChildren {
  span: number;
  height: string;
  title?: string;
  colour?: string;
  textColour?: string;
}

const GridItem: FC<GridItemProps> = ({
  span = 2,
  height = "300px",
  title,
  colour = "#FAFAFA",
  textColour = "#000000",
  children,
}) => (
  <div
    className="text-black p-4 col-span-3 h-[400px] rounded overflow-scroll"
    style={{
      gridColumn: `span ${span}`,
      height,
      backgroundColor: colour,
      color: textColour,
    }}
  >
    {title ? <h2 className="text-xl font-bold mb-4">{title}</h2> : null}
    {children}
  </div>
);

const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-6 grid-rows-2 gap-2 w-[90vw]">
        <GridItem
          span={3}
          height="400px"
          title="Next Game"
          colour="#1B4638"
          textColour="#FAFAFA"
        >
          <NextGameTile />
        </GridItem>
        <GridItem span={3} height="400px" title="Game Admin">
          <GameAdmin />
        </GridItem>
        <GridItem span={2} height="300px" title="Recent Results"></GridItem>
        <GridItem span={2} height="300px" title="Top Players">
          <TopPlayers />
        </GridItem>
        <GridItem span={2} height="300px" />
      </div>
    </div>
  );
};

export default Main;
