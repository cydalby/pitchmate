import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <Header />
      <div className="w-[100vw] h-full flex justify-center flex-col items-center">
        <Main />
      </div>
    </div>
  );
}

export default App;
