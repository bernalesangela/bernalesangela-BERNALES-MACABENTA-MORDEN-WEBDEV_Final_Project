import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center mt-[8.938rem]">
      <section className="">
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-2 items-center">
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button className="hover:bg-black hover:text-white shadow-md hover:cursor-pointer transition-all duration-100 ">
            Login
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
