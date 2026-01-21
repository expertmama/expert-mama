import Navbar from "../components/Navbar";
import "../App.css";
import "../index.css";
import Button from "../components/button";

function Service() {
  return (
    <main>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/Background2.jpg')" }}
      >
        <Navbar />
        <div className="glass p-6 pt-6 mt-6 mx-auto w-[95%] md:max-w-[80%] lg:max-w-[70%] px-4 md:px-10 flex flex-col items-center">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-6">
            What service do you need?
          </h2>

          {/* Service Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="glass">Plumber</Button>
            <Button variant="glass">Electrician</Button>
            <Button variant="glass">Cleaner</Button>
            <Button variant="glass">AC Repair</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Service;
