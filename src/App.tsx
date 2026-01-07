import Navbar from "./components/Navbar";
import { colors } from "./components/color";
function App() {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundImage: "url('/src/assets/Background.jpg')" }}>
        <Navbar />
        
        <div className="p-6 mx-auto mt-10 max-w-[70%] rounded-2xl bg-white/25 backdrop-blur-xl border
          border-white/30 shadow-lg flex flex-col items-center">
          <div className="text-center">
            <h1 style={{ color: colors.blue }} className="text-5xl font-bold mt-1 mx-40 tracking-wide" >
              Best Home Service
            </h1>
            <h1 style={{ color: colors.blue }} className="text-5xl font-bold mt-1 mx-40 tracking-wide" >
              At Your Doorstep
            </h1>
            <p style={{ color: colors.black }} className="text-xl mt-5 mx-50 tracking-tight">
              Verified experts for cleaning, plumbing, electrical and more. Fixed pricing also allows bargaining.
            </p>
          </div>

          {/* Input Box */}
          <div className="w-full p-6 mx-auto mt-10 max-w-[70%] rounded-2xl bg-white/50 backdrop-blur-xl border
            border-white/30 flex flex-col items-center flex-grow">
            <input type="text" placeholder="Example: My AC is making wired noise and not cooling..." className="mx-auto block 
              p-4 rounded-xl border border-gray-300 shadow-md max-w-[70%] w-full h-20 placeholder" />
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 mb-4">
            <button type="button" 
              className="text-white bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 hover:bg-gradient-to-br 
              focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 
              dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5 mx-3 mt-3">Request a Service</button>
            <button type="button" 
              className="text-white bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 hover:bg-gradient-to-br 
              focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 
              dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5 mx-3 mt-3">Become A 'Hero'</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
