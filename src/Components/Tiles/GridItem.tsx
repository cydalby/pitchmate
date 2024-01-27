import { FC, PropsWithChildren, useState } from "react";
import { GrExpand as ExpandIcon } from "react-icons/gr";
import * as Colours from "../Colours";

interface GridItemProps extends PropsWithChildren {
  size?: "small" | "large";
  title?: string;
  colour?: string;
  textColour?: string;
  expandable: boolean;
}

const GridItem: FC<GridItemProps> = ({
  size = "small",
  title,
  colour = Colours.WHITE,
  textColour = "#000000",
  children,
  expandable,
}) => {
  const [expand, setExpand] = useState(false);

  const span = size === "small" ? 2 : 3;
  const baseClasses = `text-black col-span-${span} rounded overflow-scroll`;
  const expandClasses = expand ? "h-[710px] w-[90vw] z-10" : "";
  const sizeClasses = size === "small" ? "h-[300px]" : "h-[400px]";

  return (
    <div
      className={`${baseClasses} ${expandClasses} ${sizeClasses}`}
      style={{
        backgroundColor: colour,
        color: textColour,
        gridColumn: `span ${span}`,
        position: expand ? "absolute" : "relative",
      }}
    >
      {expandable ? (
        <ExpandIcon
          color={colour === Colours.WHITE ? "black" : "white"}
          className="float-right m-2 absolute right-0"
          onClick={() => setExpand(!expand)}
        />
      ) : null}
      {title ? (
        <h2 className="text-xl font-bold mb-4 p-4 pb-0">{title}</h2>
      ) : null}
      {children}
    </div>
  );
};

export default GridItem;
