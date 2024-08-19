const RiSollList = [
  "3+ Years Since Day One", // The years of activities.
  "200+ Activities Completed", // The number of activities.
  "99% Partners Satisfaction", // The number of partnerships.
  "20K+ Followers & Subscribers", // The number of audiences.
];

const RiSoll = () => {
  return (
    <div className="w-full bg-dark dark:bg-light text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {RiSollList.map((text, index) => {
          return (
            <div key={index}>
              <span className="pr-4">|</span>
              {text}
              <span className="pl-4">|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RiSoll;
