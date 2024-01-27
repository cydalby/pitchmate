import NextGameTile from "./NextGameTile";
import TopPlayers from "./TopPlayers";
import GameAdmin from "./GameAdmin";
import * as Colours from "../Colours";
import Settings from "./Settings";
import GridItem from "./GridItem";

const Tiles = () => (
  <div className="grid grid-cols-6 grid-rows-2 gap-2 w-[90vw]">
    <GridItem
      size="large"
      title="Next Game"
      colour={Colours.DARK_GREEN}
      textColour={Colours.WHITE}
      expandable
    >
      <NextGameTile />
    </GridItem>
    <GridItem size="large" expandable>
      <GameAdmin />
    </GridItem>
    <GridItem title="Recent Results" expandable />
    <GridItem expandable={false}>
      <TopPlayers />
    </GridItem>
    <GridItem expandable={false}>
      <Settings />
    </GridItem>
  </div>
);

export default Tiles;
