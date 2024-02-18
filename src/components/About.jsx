import about from '../assets/about.svg'
export function About() {
  return (
    <div className="flex gap-[73px] items-center justify-center text-[#fff] bg-[#0C2027] py-[100px] px-[130px] max-[768px]:px-[39px] max-[425px]:px-[20px] max-[768px]:flex-col">
      <div className='max-w-[570px] flex flex-col gap-[26px] about'>
        <h3 className="font-[700] text-[42px] leading-[55px]">About</h3>
        <p className="font-[400] text-[18px] leading-[32px]">
          TraedAI is a trade finance platform that leverages cutting-edge AI and
          machine learning technology to provide innovative solutions to
          businesses looking to optimize their trade finance processes.
        </p>
      </div>
      <img src={about} alt="" />
    </div>
  );
}
