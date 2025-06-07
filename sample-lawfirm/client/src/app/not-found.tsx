export default function NotFound() {
  return (
    <div className='flex flex-col h-[calc(100vh-195px)]'>
      <div className='h-24 bg-codestar-dark-navy'></div>

      <div className='flex-1 flex flex-col items-center justify-center text-center'>
        <p className='text-2xl font-bold mb-4'>페이지를 찾을 수 없습니다</p>
        <p className='text-gray-600'>요청하신 페이지가 존재하지 않습니다.</p>
      </div>
    </div>
  );
}
