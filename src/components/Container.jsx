/* eslint-disable react/prop-types */
const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full px-4 sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
