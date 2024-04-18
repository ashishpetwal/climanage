import Image from "next/image";

const Payment = () => {
  return (
    <div className="flex flex-col items-center border gap-4 p-[1.5rem] rounded-lg bg-white">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="text-xl leading-6 md:text-[1.4rem] md:leading-[1.5rem] font-semibold">
          Recent Payment Requests
        </h3>
        <div className="flex flex-col justify-center items-end gap-1 w-8 h-8">
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
          <div className="w-1 h-1 bg-[#848484] rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 w-full border rounded-2xl bg-[#B7FB49]">
        <div>
          <h3 className="text-md text-[#424242] font-bold">Sushil Kumar</h3>
          <p className="text-[#858585]">Apr 9, 2024</p>
        </div>
        <div>
          <h3 className="text-sm text-[#141414] font-bold">Rs. 10,000</h3>
          <p className="text-sm text-[#858585] text-right">Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
