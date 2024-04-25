const EditCouponCode = () => {
  return (
    <>
      <section className="p-4 mx-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Edit Coupon Code:</h3>
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
              <input
                type="text"
                id="price"
                className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="Time"
                required
              />
            </div>
            <form>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Status
              </label>
              <select
                id="validity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
                <option value="4">Type 4</option>
              </select>
            </form>

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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditCouponCode;
