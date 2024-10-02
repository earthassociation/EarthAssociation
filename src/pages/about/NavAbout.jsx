import { Link } from "react-scroll";

const NavAbout = ({ current }) => {
  return (
    <section className="my-20">
      <div className="mx-auto font-raleway font-medium max-w-[1140px] w-full tab:grid tab:justify-center tab:items-center tab:grid-cols-7">
        {navItems.map((item) => {
          const itemId = item.toLowerCase().replace(/ /g, "-"); // Create id based on title

          return (
            <Link
              to={itemId} // Reference the id of the section to scroll to
              smooth={true} // Enable smooth scroll
              duration={500} // Scroll duration in milliseconds (customizable)
              spy={true} // Adds active class while scrolling
              offset={-65} // Offset for sticky headers (adjustable)
              key={item}
              className={`${
                item.toLowerCase() === current.toLowerCase()
                  ? "bg-pgreen text-white"
                  : "bg-[#FFF000]"
              } tracking-widest p-3 text-[10px] tab:text-[16px] tab:px-0 tab:py-8 flex items-center justify-center text-center h-full cursor-pointer`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default NavAbout;

const navItems = [
  "Our Story",
  "Vision",
  "Mission",
  "Philosophy of Change",
  "The Lifecycle Approach",
  "How We Work",
  "Why Trust Us?",
];
