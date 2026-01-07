import Navbar from "./components/Navbar";
import { colors } from "./components/color";
function App() {
  return (
    <><div className="min-h-screen">
        <Navbar />
        <div className=" p-6 mx-auto mt-10 max-w-[70%] mx-auto  rounded-b-2xl bg-white/25 backdrop-blur-xl  border border-white/30 shadow-lg">
          <h1 style={{ color: colors.blue }} className="text-3xl font-bold">
            Best home service at your doorstep
          </h1>
          <p className="mt-2 text-gray-800">
            Verified experts for cleaning, plumbing, electrical and more. Fixed pricing also allows bargaining.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
