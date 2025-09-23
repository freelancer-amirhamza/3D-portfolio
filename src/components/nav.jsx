import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white transition-all duration-300 ${
          scrollingDown ? "h-16" : "h-24"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">My Website</h1>
          {/* Add your navigation links here */}
        </div>
      </div>

      {/* Bottom Glass Navbar */}
      {scrollingDown && (
        <div className="fixed bottom-0 left-0 w-full backdrop-blur-md bg-white bg-opacity-30 p-4 shadow-lg">
          <div className="flex justify-around">
            {/* Add your bottom navbar links here */}
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
