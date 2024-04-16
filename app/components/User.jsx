import Image from "next/image";

const User = () => {
  return (
    <div className="flex flex-col w-full p-8 border shadow-md py-4 rounded-lg space-y-2">
      <span className="flex items-center justify-between">
        <p className="text-[20px] font-medium text-[#2C2A29]">Total Users</p>
        <Image src="/dot-h.svg" alt="dot-h" width={8} height={8} className="w-8 h-8" />
      </span>
      <p className="text-[40px] font-bold">300</p>
      <p className="text-[#969696]">
        <span className="text-green-500 font-bold">8%</span> in last 30 days
      </p>
    </div>
  );
};

export default User;
