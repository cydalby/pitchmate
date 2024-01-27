import { FC, useState } from "react";
import Tab from "../Tab";
import { Create, Manage } from "../Admin";

const GameAdmin: FC = () => {
  const [tab, setTab] = useState("create");
  return (
    <div className="flex justify-center items-center flex-col h-full font-mono">
      <div className="w-full flex flex-row text-xl font-bold justify-around mb-2">
        <Tab label="Create" currentTab={tab} setTab={setTab} />
        <Tab label="Manage" currentTab={tab} setTab={setTab} />
      </div>
      {tab === "create" ? <Create /> : <Manage setTab={setTab}/>}
    </div>
  );
};

export default GameAdmin;
