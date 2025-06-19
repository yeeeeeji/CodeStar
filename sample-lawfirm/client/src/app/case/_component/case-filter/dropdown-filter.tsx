import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownFilterProps {
  title: string[];
}

export default function DropdownFilter({ title }: DropdownFilterProps) {
  return (
    <div className="flex">
      <div className="text-base">{title[0]}</div>
      <div>
        <ChevronDownIcon className="size-6" />
      </div>
    </div>
  );
}
