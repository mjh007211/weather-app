import { Button, DropdownMenu } from "@radix-ui/themes";
import SettingsIcon from "../assets/icon-units.svg";

export const UnitsDropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          className="!bg-(--unit-dropdown-bg-color) !text-(--units-dropdown-text-color) !font-normal hover:!bg-(--search-input-hover-bg-color) !transition !duration-300 !cursor-pointer"
          variant="soft"
        >
          <img src={SettingsIcon} alt="" />
          Units
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="!bg-(--unit-dropdown-bg-color) !text-(--units-dropdown-text-color)">
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Switch to imperial
        </DropdownMenu.Item>
        <DropdownMenu.Item className="!text-(--unit-dropdown-heading-color) !text-[12px] hover:!bg-(--unit-dropdown-bg-color) ">
          Temperature
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Celsius (&#176;C)
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Fahrenheit (&#176;F)
        </DropdownMenu.Item>
        <DropdownMenu.Separator className="!bg-(--unit-dropdown-list-separator-color)" />
        <DropdownMenu.Item className="!text-(--unit-dropdown-heading-color) !text-[12px] hover:!bg-(--unit-dropdown-bg-color)">
          Wind Speed
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          km/h
        </DropdownMenu.Item>

        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          mph
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="!bg-(--unit-dropdown-list-separator-color)" />
        <DropdownMenu.Item className="!text-(--unit-dropdown-heading-color) !text-[12px] hover:!bg-(--unit-dropdown-bg-color)">
          Precipitation
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Millimeters (mm)
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:!bg-(--unit-dropdown-list-hover-bg-color)">
          Inches (in)
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
