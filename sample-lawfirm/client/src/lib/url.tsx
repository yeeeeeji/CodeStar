export const createPageURL = (
  pathname: string,
  searchParams: URLSearchParams,
  pageNumber: number | string
) => {
  const params = new URLSearchParams(searchParams);
  params.set("page", pageNumber.toString());
  return `${pathname}?${params.toString()}`;
};

export const createDetailURL = (pathname: string, id: string) => {
  return `${pathname}/detail/${id}`;
};
