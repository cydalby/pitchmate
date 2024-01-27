const Settings = () => (
  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full w-full bg-black">
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="bg-gold rounded transform transition duration-500 ease-in-out hover:scale-110 border hover:border-2 border-black hover:z-10"
      />
    ))}
  </div>
);

export default Settings;
