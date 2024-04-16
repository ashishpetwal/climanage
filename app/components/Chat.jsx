import Image from "next/image";

const Chat = () => {
  return (
    <div className="flex flex-col items-center border p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full mb-4 px-4">
        <h3 className="text-2xl font-semibold">Recent Live Chats</h3>
        <Image src="/dot-v.svg" alt="dot" width={8} height={8} className="w-8 h-8" />
      </div>
      <div className="flex justify-between items-center m-4 px-4 w-full border border-gray-400 py-2 rounded-2xl">
        <div className="flex items-center gap-2">
          <Image src="/man.png" alt="man" width={160} height={160} className="w-16 h-16 mx-auto" />
          <div className="max-w-40 md:max-w-60 mr-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2 justify-start items-start">
              <h3 className="text-md lg:text-lg text-[#424242] font-semibold">John David</h3>
              <h3 className="text-sm text-[#424242]">Freelancer</h3>
            </div>
            <p className="text-sm text-wrap text-[#858585]"><span className="font-bold text-green-500">Closed</span> on Apr 9, 2024 at 09:00 pm</p>
          </div>
        </div>
        <button className="bg-gray-300 p-2 rounded-full">
          <Image src="/send.svg" alt="send" width={6} height={6} className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
