const Freeplan = () => {
  return (
    <>
      <section className="p-4 mx-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Edit Free Plan:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Plan Name
              </label>
              <input
                type="text"
                id="plan_name"
                class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="Plan"
                required
              />
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Cost (in Rupees)
              </label>
              <input
                type="text"
                id="price"
                class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="Price"
                required
              />
            </div>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Validity
              </label>
              <select
                id="validity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
                <option value="4">Type 4</option>
              </select>
            </form>
          </div>
        </div>
      </section>
      <section className="p-4 mx-4 border-t">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Features:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Number of Clients/Projects
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Number of Team Members
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Live Chat with Clients
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Live Chat on Website
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Generate Invoice and Download
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Send Invoices Automatically
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Branding
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Custom Branding
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </form>
            <form>
              <label for="first_name" class="block mb-2 text-lg text-[#878787]">
                Payment Gateway Integration
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option selected>Choose Type</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Freeplan;
