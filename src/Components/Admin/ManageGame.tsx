import { Dispatch, FC, SetStateAction } from "react";
import { TbReload as ReloadIcon } from "react-icons/tb";
import { FaPlus as PlusIcon } from "react-icons/fa6";

const ManageGame: FC<Props> = ({ setTab }) => (
  <div className="h-full w-full text-center flex items-center justify-center flex-col">
    <span>You currently have no active games to manage.</span>
    <div className="flex flex-row justify-center items-center mt-8 ">
      <button
        className="rounded-full py-2 px-4 bg-gold text-black w-[50px] h-10"
        title="Create game"
        onClick={() => setTab("create")}
      >
        <PlusIcon />
      </button>
      <button
        className="rounded-full py-2 px-4 bg-gold text-black w-[50px] m-2 h-10"
        title="Refresh"
      >
        <ReloadIcon />
      </button>
    </div>
  </div>
);

export default ManageGame;

interface Props {
  setTab: Dispatch<SetStateAction<string>>;
}
