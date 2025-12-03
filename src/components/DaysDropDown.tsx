import { Button, DropdownMenu } from "@radix-ui/themes";

export const DaysDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          className="!bg-(--days-dropdown-bg-color) !text-(--units-dropdown-text-color) !font-normal hover:!bg-(--search-input-hover-bg-color) !transition !duration-300 !cursor-pointer"
          variant="soft"
        >
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
          })}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="!bg-(--unit-dropdown-bg-color) !text-(--units-dropdown-text-color)">
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color) !cursor-pointer">
          Monday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color) !cursor-pointer">
          Tuesday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color) !cursor-pointer">
          Wednesday
        </DropdownMenu.Item>

        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color) !cursor-pointer">
          Thursday
        </DropdownMenu.Item>

        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color) !cursor-pointer">
          Friday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color) !cursor-pointer">
          Saturday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color) !cursor-pointer">
          Sunday
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
