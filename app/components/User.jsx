import Image from "next/image";

const User = ({index}) => {
  return (
    <div className="relative flex flex-col w-full p-8 py-4 rounded-lg bg-white space-y-4 overflow-hidden">
      <span className="flex items-center justify-between">
        <p className="text-sm md:text-[20px] font-medium text-[#2C2A29]">Total Users</p>
        <Image src="/dot-h.svg" alt="dot-h" width={8} height={8} className="w-8 h-8" />
      </span>
      <p className="text-2xl lg:text-[40px] font-bold">300</p>
      <p className="text-[#969696] text-sm">
        <span className="text-sm text-green-500 font-bold">8%</span> in last 30 days
      </p>
      <Image src="/vec-1.svg" alt="vec-1" width={100} height={100} className={`${!(index===1)?"hidden":""} w-full absolute bottom-0 left-0`} />
      {/* <Image src="/vec-1.svg" alt="vec-1" width={100} height={100} className={`${!(index===1)?"hidden":""} w-full scale-[1.25] absolute left-16 -rotate-[5deg] top-28`} /> */}
    </div>
  );
};

export default User;
