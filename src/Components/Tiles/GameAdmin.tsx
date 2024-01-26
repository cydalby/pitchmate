const GameAdmin = () => (
  <div className="flex justify-center items-center flex-col">
    <span className="text-2xl font-bold mb-4">Create a new game</span>
    <form className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md">
      <input
        type="time"
        id="time"
        name="time"
        className="border-2 border-gray-300 p-2 rounded-md bg-white"
      />
      <input
        type="text"
        placeholder="Location"
        className="border-2 border-gray-300 p-2 rounded-md bg-white"
      />
      <select
        name="minPlayers"
        id="minPlayers"
        className="border-2 border-gray-300 p-2 rounded-md bg-white"
      >
        <option value="10">10 players</option>
        <option value="12">12 players</option>
        <option value="14">14 players</option>
      </select>
      <input
        type="submit"
        value="Create"
        className="bg-[#F5FF6B] text-black p-2 rounded-md cursor-pointer hover:bg-blue-600"
      />
    </form>
  </div>
);

export default GameAdmin;
