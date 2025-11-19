import { fetchCaseList } from "@/lib/db/cases/api";

export const getCaseCategories = async () => {
  const cases = await fetchCaseList();
  const categories = Array.from(new Set<string>(cases.map((c) => c.category)));
  return categories;
};
