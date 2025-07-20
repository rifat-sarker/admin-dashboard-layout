import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center font-bold text-4xl">
        Hey, Welcome to Home Page
      </h1>
      <button>
        <Link
          to="/dashboard"
          className="block mt-4 text-center border  px-6 py-2 bg-[#9b52fa] text-white rounded"
        >
          Go to Dashboard
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
