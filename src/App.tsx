import Navbar from "./components/Navbar";
import { colors } from "./components/color";
import Button from "./components/Button";
function App() {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundImage: "url('/src/assets/Background.jpg')" }}>
        <Navbar />

        {/* Main Content */}
        <div 
          className="
            pt-6 
            mx-auto 
            mt-6 
            max-w-[70%] 
            rounded-2xl 
            bg-white/25 
            glass 
            shadow-lg 
            flex 
            flex-col 
            items-center">

            {/* Title & Description */}
          <div className="text-center">
              <h1 style={{ color: colors.blue }} 
               className="
                text-5xl 
                font-bold 
                mt-1 
                mx-40 
                tracking-wide" >
                  Best Home Service
              </h1>
            <h1 style={{ color: colors.blue }} 
              className="
                text-5xl 
                font-bold 
                mt-1 
                mx-40 
                tracking-wide" >
                 At Your Doorstep
            </h1>
            <p style={{ color: colors.black }} 
              className=" 
                text-xl 
                mt-5 
                mx-50 
                tracking-tight">
                  Verified experts for cleaning, plumbing, electrical and more. Fixed pricing also allows bargaining.
            </p>
          </div>

          {/* Input Container Main */}
          <div className="w-[90%]">

            {/* Input Field & Robot */}
            <div 
              className="
                flex-1
                flex 
                items-center
                w-full
                p-5 
                mt-5
                rounded-2xl 
                bg-white/50 
                glass-white 
                shadow-xs 
                gap-5 
                border  border-gray-300">

              {/* Input Field & Submit Button */}
              <div 
                className="
                max-w-full
                flex-1
                flex 
                items-center
                w-full 
                p-5
                rounded-xl 
                bg-white/50 
                glass
                shadow-xs 
                gap-5 
                border 
                border-gray-300">
                
                {/* Auto-expanding Textarea */}
                <textarea
                  placeholder="Example: My AC is making weird noise and not cooling..."
                  rows={1}
                  className="
                    w-full
                    resize-none
                    bg-transparent
                    text-lg
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-0
                    overflow-hidden
                  "
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = target.scrollHeight + "px";
                  }}
                />

                {/* Submit Button */}
                <Button variant="glass">
                  Submit
                </Button>
              </div>
              {/* Robot Image */}
              <div>
                <img 
                  src="./src/assets/robo.png" 
                  alt="ROBO 2.0" 
                  className=" w-40 h-40 object-contain" 
                />
              </div>
            </div>                               

              {/* Buttons */}
              <div className="flex justify-center mt-6 mb-4">
                <Button variant="glass" className="mx-3 mt-3">
                  Request a Service
                </Button>

                <Button variant="glass" className="mx-3 mt-3">
                  Become A 'Hero'
                </Button>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
