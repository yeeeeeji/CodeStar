import { getCaseCategories } from "@/hooks/getCaseCategories";
import DropdownFilter from "./dropdown-filter";

export default async function CaseFilter() {
  const categories = await getCaseCategories();
  console.log(categories);
  return (
    <div className="flex">
      <DropdownFilter title={categories} />
    </div>
  );
}
