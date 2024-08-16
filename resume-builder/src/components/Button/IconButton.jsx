
const IconButton = ({ icon: Icon, text, width, height, backgroundColor, className, onClick, ...props }) => {
  return (
    <button
      className={`flex items-center  ps-4 ${className} ${Icon ? "rounded-[6px]" : "rounded-none"} text-xl`}
      style={{ width, backgroundColor, height }}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="mr-2 text-lg" />}
      {text}
    </button>
  );
};

export default IconButton;
