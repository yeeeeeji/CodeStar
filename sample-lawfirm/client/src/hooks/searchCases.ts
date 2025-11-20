import { CaseSearchResults } from "@/types/case";

interface searchCasesProps {
  keyword: string;
  cases: CaseSearchResults[];
}

export const searchCases = ({ keyword, cases }: searchCasesProps) => {
  const results = cases.filter(
    (c) =>
      c.category.includes(keyword) ||
      c.title.includes(keyword) ||
      c.content.includes(keyword)
  );
  return results;
};
