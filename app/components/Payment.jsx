const Payment = () => {
  return (
    <div className="flex flex-col items-center border p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full mb-4 px-4">
        <h3 className="text-2xl font-semibold">Recent Payment Requests</h3>
        <img src="/dot-v.svg" className="w-8 h-8" />
      </div>
      <div className="flex items-center justify-between m-4 px-4 w-full border py-2 rounded-2xl bg-[#B7FB49]">
        <div>
          <h3 className="text-md text-[#424242] font-bold">Sushil Kumar</h3>
          <p className="text-[#858585]">Apr 9, 2024</p>
        </div>
        <div>
          <h3 className="text-sm text-[#141414] font-bold">Rs. 10,000</h3>
          <p className="text-sm text-[#858585]">Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
