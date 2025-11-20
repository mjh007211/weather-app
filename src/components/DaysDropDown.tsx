import { Button, DropdownMenu } from "@radix-ui/themes";

export const DaysDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          className="!bg-(--days-dropdown-bg-color) !text-(--units-dropdown-text-color) !font-normal hover:!bg-(--search-input-hover-bg-color) !transition !duration-300 !cursor-pointer"
          variant="soft"
        >
          wednesday
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="!bg-(--unit-dropdown-bg-color) !text-(--units-dropdown-text-color)">
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Monday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Tuesday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Wednesday
        </DropdownMenu.Item>

        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Thursday
        </DropdownMenu.Item>

        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Friday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Saturday
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Sunday
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
