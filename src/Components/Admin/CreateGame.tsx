const groups = [
  { name: "TNF", id: "0" },
  { name: "Bet Tech Soccer", id: "1" },
];

const CreateGame = () => (
  <form className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md h-full mb-4">
    <select
      name="minPlayers"
      id="minPlayers"
      className="border-2 border-gray-300 p-2 rounded-md bg-white"
    >
      {groups.map(({ id, name }) => (
        <option value={id} key={name}>
          {name}
        </option>
      ))}
    </select>
    <input
      type="datetime-local"
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
      className="bg-gold text-black p-2 rounded-md cursor-pointer"
    />
  </form>
);

export default CreateGame;
