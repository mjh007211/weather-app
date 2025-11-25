import { Button } from "./Button";
import { SearchInput } from "./SearchInput";

export const SearchForm = () => {
  return (
    <form className="flex gap-2.5 mt-12 max-[667px]:flex-col">
      <SearchInput />
      <Button />
    </form>
  );
};
