export const Button = () => {
  return (
    <button
      type="submit"
      className="w-24 h-10 rounded-lg bg-(--button-bg-color) text-(--button-text-color) transition duration-300 hover:bg-(--button-hover-bg-color) cursor-pointer max-[667px]:w-full focus:outline focus:outline-2 focus:outline-(--button-bg-color)  focus:outline-offset-4"
    >
      Search
    </button>
  );
};
