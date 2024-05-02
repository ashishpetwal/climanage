import { useState } from "react";
import ColorInput from "./ColorInput";
import Select from "./Select";
import ImageInput from "./ImageInput";

const Settings = () => {
  const [primaryColor, setPrimaryColor] = useState("#453750");
  const [secondaryColor, setSecondaryColor] = useState("#736589");
  const [tertiaryColor, setTertiaryColor] = useState("#B7FB49");

  const handleChange = (color, setColor) => (e) => setColor(e.target.value);

  return (
    <>
      <section className="p-4 mx-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">General Settings:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Logo (width x height)
              </label>
              <ImageInput img={"https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"} alt="image.png" />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Branding Text
              </label>
              <input
                type="text"
                id="plan_name"
                className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="Enter Branding Text"
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Website Status
              </label>
              <Select
                options={["Active", "Inactive"]}
                onSelect={(option) => console.log(option)}
              />
            </div>
            <div>
              <label className="block mb-2 text-lg text-[#878787]">
                Primary Color
              </label>
              <ColorInput
                color={primaryColor}
                onChange={handleChange(primaryColor, setPrimaryColor)}
              />
            </div>
            <div>
              <label className="block mb-2 text-lg text-[#878787]">
                Primary Color
              </label>
              <ColorInput
                color={secondaryColor}
                onChange={handleChange(secondaryColor, setSecondaryColor)}
              />
            </div>
            <div>
              <label className="block mb-2 text-lg text-[#878787]">
                Primary Color
              </label>
              <ColorInput
                color={tertiaryColor}
                onChange={handleChange(tertiaryColor, setTertiaryColor)}
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Language
              </label>
              <Select
                options={["English", "Hindi", "Marathi", "Gujarati"]}
                onSelect={(option) => console.log(option)}
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Currency
              </label>
              <Select
                options={["Rupee", "Dollar", "Euro", "Pound"]}
                onSelect={(option) => console.log(option)}
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Auto Location Detection
              </label>
              <Select
                options={["Yes", "No"]}
                onSelect={(option) => console.log(option)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 mx-8 border-t border-[#cccccc]">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Payment Gateway Details:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Payment Gateway
              </label>
              <Select
                options={["Razorpay", "Paypal", "Stripe", "Paytm"]}
                onSelect={(option) => console.log(option)}
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Secret Key
              </label>
              <input
                type="text"
                id="plan_name"
                className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="5585kk(I8uf7ud82848c4/\bijvjifv9s"
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg text-[#878787]"
              >
                Salt Key
              </label>
              <input
                type="text"
                id="plan_name"
                className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="nijjivjf885xn56didn7388bd&e95ws"
                required
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
