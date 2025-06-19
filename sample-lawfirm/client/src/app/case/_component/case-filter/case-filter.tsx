import DropdownFilter from "./dropdown-filter";

export default function CaseFilter() {
  return (
    <div className="flex">
      <DropdownFilter title={filter1} />
      <DropdownFilter title={filter2} />
    </div>
  );
}

const filter1 = ["업무사례", "업무사례", "업무사례", "업무사례", "업무사례"];
const filter2 = ["형사", "형사", "형사", "형사", "형사"];
