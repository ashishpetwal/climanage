const Subscriptions = () => {
  return (
    <div className="flex flex-col justify-between items-center border p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full mb-4 px-4">
        <h3 className="text-2xl font-semibold">Recent Subscriptions</h3>
        <img src="/dot-v.svg" className="w-8 h-8" />
      </div>
      <div className="flex items-center justify-between w-full gap-4 border rounded-lg p-4">
        <div className="flex gap-3">
          <img src="/staredo.png" className="w-12 mx-auto" />
          <div>
            <p className="text-md font-semibold">Free Plan</p>
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                <p className="text-sm">active</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-md text-[#13A757] border border-[#13A757] px-4 py-1 rounded-full">
            Success
          </span>
          <p className="text-gray-400 text-center text-sm">Apr 9, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
