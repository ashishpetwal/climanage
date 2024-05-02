const ColorInput = ({ color, onChange }) => {
  return (
    <div className="flex mb-4 bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none w-full p-2.5">
      <input
        type="text"
        value={color}
        onChange={onChange}
        className="bg-[#f9f9f9] text-gray-900 text-sm rounded-lg outline-none block w-full"
      />
      <div
        style={{ backgroundColor: color }}
        className="w-5 h-5 border border-gray-300 rounded"
      ></div>
    </div>
  );
};

export default ColorInput;
