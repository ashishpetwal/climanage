import Image from "next/image";

const Subscriptions = () => {
  return (
    <div className="flex flex-col gap-4 items-center border p-[1.5rem] rounded-lg bg-white">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="text-xl leading-6 md:text-[1.4rem] md:leading-[1.5rem] font-semibold">Recent Subscriptions</h3>
        <Image src="/dot-v.svg" alt="dot-v" width={8} height={8} className="w-8 h-8" />
      </div>
      <div className="flex items-center justify-between w-full gap-4 border rounded-lg p-4">
        <div className="flex gap-3">
          <Image src="/staredo.png" alt="company" width={120} height={120} className="w-12 mx-auto" />
          <div>
            <p className="text-md font-semibold">Free Plan</p>
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                <p className="text-sm">active</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-sm font-medium text-[#13A757] border border-[#13A757] px-4 py-1 rounded-full">
            Success
          </span>
          <p className="text-gray-400 text-center text-sm">Apr 9, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
