import Banner from "@/components/layout/banner";

interface CaseDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CaseDetailPage({ params }: CaseDetailProps) {
  const id = (await params).id;

  return (
    <div>
      <Banner imageAlt="업무사례 배너" title="업무사례" />
      <div>업무사례 상세페이지: {id}</div>
    </div>
  );
}
