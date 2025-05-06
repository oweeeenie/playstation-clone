import psLogo from "./images/playstation-logo.png";

function NavButton({ label }) {
  return (
    <button className='flex items-center px-5 hover:text-blue-600 cursor-pointer'>
      {label}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4 pl-0.5'
        fill='none'
        viewBox='0 0 24 12'
        stroke='gray'
        strokeWidth={4}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </button>
  );
}

export default function Navbar() {
  return (
    <>
      <div className='shadow-lg'>
        <div className='py-2 px-4 flex items-center text-lg font-semibold'>
          {/* LEFT SIDE: logo & nav buttons */}
          <div className='flex items-center flex-grow'>
            <img src={psLogo} alt='Blue PS Logo' className='h-13' />
            <NavButton label='Games' />
            <NavButton label='PS5' />
            <NavButton label='PS4' />
            <NavButton label='Services' />
            <NavButton label='Accessories' />
            <NavButton label='News' />
            <NavButton label='Store' />
            <NavButton label='Support' />
          </div>

          {/* RIGHT SIDE: sign in & search */}
          <div className='flex items-center gap-5'>
            <button className='bg-blue-500 hover:bg-blue-600 rounded-full text-xl text-white cursor-pointer p-1 w-22'>
              Sign In
            </button>

            {/* search bar */}
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                className='w-32 pl-4 pr-10 py-1.5 border border-gray-300 text-md rounded-md'
              />
              <span className='absolute inset-y-0 right-3 flex items-center'>
                {/* magnifying glass icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
