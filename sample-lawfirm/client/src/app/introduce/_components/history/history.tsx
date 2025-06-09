export default function CompanyHistory() {
  const historyData = [
    {
      year: '2025',
      events: [
        { month: '08', description: '자체 개발한 AI 기반 계약서 검토 시스템 `코드AI`출시' },
        { month: '05', description: '메타버스 플랫폼 `Z社` 저작권 분쟁 자문' },
        { month: '03', description: '4차 산업 기술에 대응하기 위한 지식재산권팀 신설' },
        { month: '02', description: '일본 도쿄 소재 로펌과 전략적 업무협약(MOU) 체결' }
      ]
    },
    {
      year: '2024',
      events: [
        { month: '10', description: 'ESG 관련 기업 자문 확대를 위해 ESG 자문센터 설립' },
        { month: '08', description: 'B제약사 vs 복제약 제조사’ 특허소송 수임' },
        { month: '05', description: '공공 및 기업 고객 대상법률 리서치 서비스개시칭' },
        { month: '02', description: '국내 유력 경제지 주관 ‘2024 대한민국 우수 로펌’ 기업자문 부문 선정' }
      ]
    },
    {
      year: '2023',
      events: [
        { month: '09', description: '본사 사무소를 강남 도산대로로 이전' },
        { month: '08', description: '전직 검찰 출신 변호사 영입, 형사전문센터 강화' },
        { month: '05', description: '대형 건설사 하도급 부당해고 사건 승소' },
        { month: '04', description: '해외 인플루언서 마케팅 업체 `G社` 국내 진출 자문' },
        { month: '02', description: '기업 고객 대상 ‘월간 법률 브리핑’ 법률 세미나 정례화' }
      ]
    },
    {
      year: '2022',
      events: [
        { month: '12', description: '스타트업 무료 법률 컨설팅 및 투자계약 자문 지원 프로그램 개시' },
        { month: '09', description: '디지털 헬스케어 기업 `M社` 시리즈B 투자 자문 수행' },
        { month: '08', description: '노동전문 변호사 다수 영입으로 노동 분야 전문성 강화' },
        { month: '03', description: '자체 뉴스레터‘CODE Brief’ 창간' }
      ]
    },
    {
      year: '2021',
      events: [
        { month: '09', description: '국내 대표 이커머스 플랫폼 M&A 자문 수행' },
        { month: '07', description: '핀테크 스타트업 ‘T사’ 라이선스 분쟁 대응' },
        { month: '05', description: '사내 협업시스템 구축: 클라우드 기반 업무 관리 시스템 도입' },
        { month: '04', description: 'T·스타트업·지식재산권 분야 전문성을 바탕으로 법무법인 코드별 설립' }
      ]
    }
  ];

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div>
        <p className='text-[40px] font-bold tracking-[-0.01em] text-center mt-[50px]'>연혁</p>
      </div>
      <div className='my-25 space-y-25'>
        {historyData.map((yearData) => (
          <div key={yearData.year} className='flex items-start gap-8'>
            <div className='flex w-[467px] items-center justify-between'>
              <p className='text-6xl font-bold tracking-[-0.01em]'>{yearData.year}</p>
              <div className='w-[200px] h-px bg-gray-500'></div>
            </div>
            <div className='flex-1'>
              {yearData.events.map((event) => (
                <div key={`${yearData.year}-${event.month}`} className='flex gap-[58px]'>
                  <p className='text-3xl font-bold tracking-[-0.01em] leading-[2]'>{event.month}</p>
                  <p className='text-3xl font-medium tracking-[-0.01em] leading-[2]'>{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
