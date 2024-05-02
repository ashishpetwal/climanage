const ImageInput = ({ img, alt }) => {
  return (
    <div className="flex items-center mb-4 bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none w-full p-2 cursor-pointer">
      <input
        type="file"
        // value={color}
        // onChange={onChange}
        className="opacity-0 bg-[#f9f9f9] text-gray-900 text-sm rounded-lg outline-none block w-full cursor-pointer"
      />
      <p className="absolute">{alt}</p>
      <img
        src={img}
        alt={alt}
        className="w-5 h-5 border border-gray-300 rounded object-cover"
      />
    </div>
  );
};

export default ImageInput;
