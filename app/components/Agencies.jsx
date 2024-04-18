import Image from "next/image";

const Agencies = () => {
  return (
    <div className="flex flex-col gap-4 items-center border p-[1.5rem] rounded-lg bg-white">
      <div className="flex justify-between items-center w-full mb-4">
        <h3 className="text-xl leading-6 md:text-[1.4rem] md:leading-[1.5rem] font-semibold">
          Recent Agencies/Freelancers
        </h3>
        <div className="flex flex-col justify-center items-end gap-1 w-8 h-8">
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-start lg:items-center justify-between w-full gap-4 border rounded-lg lg:flex-row p-4">
        <div className="flex gap-3">
          <Image
            src="/staredo.png"
            alt="company"
            width={80}
            height={80}
            className="w-12 h-12 my-auto"
          />
          <div className="space-y-1">
            <p className="text-md font-semibold">Staredo Digital Agency</p>
            <p className="text-sm">100% Profile Complete</p>
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-sm text-white font-medium bg-[#736589] px-4 py-1 rounded-full">
            Free Plan
          </span>
          <p className="text-gray-400 text-sm text-center">Apr 9, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
