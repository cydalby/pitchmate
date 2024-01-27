import { Dispatch, FC, SetStateAction } from "react";

const Tab: FC<TabProps> = ({ label, currentTab, setTab }) => {
  const baseTabClass =
    "w-1/2 text-center h-10 flex items-center justify-center";
  const activeTabClass = `${baseTabClass} bg-offWhite`;
  const inactiveTabClass = `${baseTabClass} bg-[#ededed] cursor-pointer`;

  return (
    <span
      onClick={() => setTab(label.toLowerCase())}
      className={
        currentTab === label.toLowerCase() ? activeTabClass : inactiveTabClass
      }
    >
      {label}
    </span>
  );
};

export default Tab;

interface TabProps {
  label: string;
  currentTab: string;
  setTab: Dispatch<SetStateAction<string>>;
}
