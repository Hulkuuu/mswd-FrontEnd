import React from "react";

const Example = () => {
  return (
    <div className="grid min-h-screen place-content-center bg-slate-900 p-4">
      <DrawOutlineButton>Hover me</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-100 border-2 border-transparent bg-transparent transition-colors duration-300 ease-in-out hover:text-indigo-300 hover:border-indigo-300"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-300 ease-in-out group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all duration-300 ease-in-out group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all duration-300 ease-in-out group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all duration-300 ease-in-out group-hover:h-full" />
    </button>
  );
};

export default Example;
