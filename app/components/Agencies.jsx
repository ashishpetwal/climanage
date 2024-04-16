const Agencies = () => {
  return (
    <div className="flex flex-col justify-between items-center border p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center w-full mb-4 px-4">
        <h3 className="text-2xl font-semibold">Recent Agencies/Freelancers</h3>
        <img src="/dot-v.svg" className="w-8 h-8" />
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-4 border rounded-lg lg:flex-row p-4">
        <div className="flex gap-3">
          <img src="/staredo.png" className="w-8 h-8 my-auto" />
          <div className="space-y-1">
            <p className="text-md font-semibold">Staredo Digital Agency</p>
            <p className="text-sm">100% Profile Complete</p>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-md text-white font-semibold bg-[#736589] px-4 py-1 rounded-full">
            Free Plan
          </span>
          <p className="text-gray-400 text-sm text-center">Apr 9, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
