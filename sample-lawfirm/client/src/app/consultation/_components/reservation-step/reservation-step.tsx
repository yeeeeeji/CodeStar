export default function ReservationStep() {
  const steps = [
    {
      title: '상담신청',
      description: ['24시간 이내 담당자가', '유선 연락을 드립니다.']
    },
    {
      title: '방문상담',
      description: ['예약 후 내방하시면 담당 변호사와', '법률 상담이 가능합니다.']
    },
    {
      title: '사건진행',
      description: ['의뢰인에게 법률서비스와', '최고의 결과를 제공합니다.']
    }
  ];

  return (
    <div className='max-w-[1440px] mx-auto my-25'>
      <div className='mb-23'>
        <p className='text-[40px] font-semibold tracking-[-0.01em] mb-[30px]'>상담 신청</p>
        <p className='text-4xl font-bold tracking-[-0.01em] leading-1.8 mb-4'>
          법무법인 코드별은 의뢰인의 상황을 가장 먼저 이해하는 것에서 출발합니다.
        </p>
        <p className='text-4xl font-bold tracking-[-0.01em] leading-1.8'>
          아래 양식을 작성해 주시면 신속히 연락드리겠습니다.
        </p>
      </div>
      <div className='flex gap-6'>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 border border-[#BABABA] py-[75px] px-[50px] ${
              index !== steps.length - 1 ? 'flex justify-between items-center' : ''
            }`}
          >
            <div className='space-y-[10px]'>
              <p className='text-[32px] leading-1.6'>STEP {index + 1}</p>
              <p className='text-3xl font-bold leading-1.6'>{step.title}</p>
              <div>
                {step.description.map((line, lineIndex) => (
                  <p key={lineIndex} className='text-2xl leading-1.6'>
                    {line}
                  </p>
                ))}
              </div>
            </div>
            {index !== steps.length - 1 && (
              <div>
                <span className='text-gray-500 text-2xl'>»</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
