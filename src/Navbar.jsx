import psLogo from "./images/playstation-logo.png";

export default function Navbar() {
  return (
    <>
      <div className='shadow-lg'>
        {/* NAVBAR INNER CONTAINER */}
        <div className='py-2 px-4 flex items-center text-lg font-semibold gap-4'>
          <img src={psLogo} alt='Blue PS Logo' className='h-13' />
          {/* NAVBAR DROPDOWNS */}
          <button className='flex items-center'>
            Games
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 pl-0.5'
              fill='none'
              viewBox='0 0 24 12'
              stroke='gray'
              strokeWidth={4}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
