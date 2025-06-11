import { colors } from "@/constants/colors";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";

interface SearchBarProps {
  placeholder?: string;
  formStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
}

export default function SearchBar({
  placeholder = "코드별 사건사례를 검색해보세요.",
  formStyle = "col-span-2 flex justify-between border border-codestar-gray rounded-2xl pr-[15px] 2xl:w-[962px] 2xl:h-full 2xl:mt-0 w-full h-[82px] mt-3",
  inputStyle = "grow outline-none text-[24px] my-[26px] ml-[25px]",
  iconStyle = "2xl:size-11 size-9 2xl:my-[26px] my-auto mr-[25px] ml-[15px]",
}: SearchBarProps) {
  return (
    <Form action={""} className={formStyle}>
      <input name="query" placeholder={placeholder} className={inputStyle} />
      <button type="submit">
        <MagnifyingGlassIcon
          className={iconStyle}
          color={colors.codestarGray}
          strokeWidth={3}
        />
      </button>
    </Form>
  );
}
