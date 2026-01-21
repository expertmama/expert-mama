import Navbar from "../components/Navbar";
import "../App.css";
import "../index.css";
import Avatar from "../assets/Avatar.png";

function Login() {
  return (
    <main>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/Background.jpg')" }}
      >
        <Navbar />

        {/* Main Content */}
        <div className="glass p-6 pt-6 mt-6 mx-auto w-[95%] md:max-w-[80%] lg:max-w-[70%] px-4 md:px-10 flex flex-col items-center">
          <img
            alt="Expert Mama"
            src={Avatar}
            className="mx-auto h-10 w-auto dark:hidden"
          />
          <img
            alt="Expert Mama"
            src={Avatar}
            className="mx-auto h-10 w-auto not-dark:hidden"
          />
          {/* Title */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          {/* Form */}
          <div className="glass-white p-6 pt-6 mt-6 mx-auto w-[95%] md:max-w-[80%] lg:max-w-[70%] px-4 md:px-10 flex flex-col items-center">
            <form action="#" method="POST" className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Adress</label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  ></input>
                </div>
              </div>
              {/* Password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {/* Forgot Password */}
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
