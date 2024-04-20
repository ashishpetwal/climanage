import Image from "next/image";

const Chat = () => {
  return (
    <div className="flex flex-col gap-4 items-center border p-[1.5rem] rounded-lg bg-white">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="text-xl leading-6 md:text-[1.4rem] md:leading-[1.5rem] font-semibold">
          Recent Live Chats
        </h3>
        <div className="flex flex-col justify-center items-end gap-1 w-8 h-8">
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 w-full border border-gray-400 rounded-2xl">
        <div className="flex items-center gap-2">
          <Image
            src="/man.png"
            alt="man"
            width={160}
            height={160}
            className="w-12 h-12 mx-auto"
          />
          <div className="max-w-40 md:max-w-60 mr-4">
            <div className="flex items-center gap-1 lg:flex-row lg:items-center lg:gap-2 justify-start">
              <h3 className="text-sm text-nowrap lg:text-lg text-[#424242] font-semibold">
                John David
              </h3>
              <Image src="/dot.svg" alt="dot" width={4} height={4} />
              <h3 className="text-sm text-[#424242]">Freelancer</h3>
            </div>
            <p className="text-sm text-wrap text-[#858585]">
              <span className="font-bold text-green-500">Closed</span> on Apr 9,
              2024 at 09:00 pm
            </p>
          </div>
        </div>
        <button className="bg-gray-300 p-2 rounded-full">
          <Image
            src="/send.svg"
            alt="send"
            width={6}
            height={6}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default Chat;
