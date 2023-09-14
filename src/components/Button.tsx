// TODO: Fix "active" state - https://linear.app/generalcollaboration/issue/GC-511/todo-fix-active-state
const Button = ({ onClick, noFact }) => (
  <button
    onClick={onClick}
    className="bg-[#C2C8A7] text-[#A26059] text-lg sm:text-2xl py-4 px-8 rounded-full rotate-3 uppercase"
  >
    {noFact ? "WANT TO HEAR A FUN FACT?" : "Gimme Another"}
  </button>
);

export default Button;
