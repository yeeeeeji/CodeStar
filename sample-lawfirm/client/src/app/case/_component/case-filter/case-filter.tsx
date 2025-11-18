import DropdownFilter from "./dropdown-filter";

export default function CaseFilter() {
  return (
    <div className="flex">
      <DropdownFilter title={filter1} />
      <div className="mr-[55px]" />
      <DropdownFilter title={filter2} />
    </div>
  );
}

const filter1 = ["업무사례", "업무사례", "업무사례", "업무사례", "업무사례"];
const filter2 = ["형사", "형사사건", "형사", "형사", "형사"];
