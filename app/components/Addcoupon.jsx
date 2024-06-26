import Select from "./Select";

const AddCouponCode = () => {
  return (
    <>
      <section className="p-4 mx-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Add Coupon Code:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Coupon Code
              </label>
              <input
                type="text"
                id="plan_name"
                className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="Code"
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Valid For
              </label>
              <Select
                options={["Plus", "Pro", "Plus & Pro"]}
                onSelect={(option) => console.log(option)}
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Status
              </label>
              <Select
                options={["Active", "Inactive", "Expired"]}
                onSelect={(option) => console.log(option)}
              />
            </div>

            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Start Date
              </label>
              <input
                datepicker
                type="date"
                value={new Date().toISOString().split("T")[0]}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Select date"
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Expiry Date
              </label>
              <input
                datepicker
                type="date"
                value={new Date().toISOString().split("T")[0]}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddCouponCode;
