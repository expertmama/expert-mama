import Navbar from "./components/Navbar";
import Button from "./components/button";
import "./App.css";
import "./index.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/Background2.jpg')" }}
    >
      <Navbar />

      {/* Main Content */}
      <div className="glass p-6t-6 mt-6 mx-auto w-[95%] md:max-w-[80%] lg:max-w-[70%] px-4 md:px-10 flex flex-col items-center">
        {/* Title & Description */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl mt-2 text-blue-600">
            Best Home Service
          </h1>

          <h1 className="text-3xl md:text-5xl text-blue-600">
            At Your Doorstep
          </h1>

          <p className="text-base md:text-xl mt-4 max-w-2xl mx-auto">
            Verified experts for cleaning, plumbing, electrical and more. Fixed
            pricing also allows bargaining.
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full mt-6">
          <div className="glass2 flex flex-col md:flex-row items-center gap-4 p-4 md:p-5">
            {/* Input */}
            <div className="input-wrapper border border-gray-300 rounded-xl flex-grow flex items-center gap-3 px-3 py-2">
              <div className="w-full">
                <textarea
                  placeholder="Example: My AC is making weird noise and not cooling..."
                  rows={1}
                  className="w-full input-glass2 resize-none overflow-hidden outline-none focus:outline-none focus:ring-0 focus:border-transparent"
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = target.scrollHeight + "px";
                  }}
                />
              </div>
              <div>
                <Button variant="glass">Ask</Button>
              </div>
            </div>

            {/* Robot */}
            <div className="animate-float hidden md:block">
              <img
                src="./src/assets/robo.png"
                alt="ROBO 2.0"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6 mb-4">
          <Button onClick={() => navigate("/service")}>
            Request a Service
          </Button>
          <Button>Become A 'Hero'</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
