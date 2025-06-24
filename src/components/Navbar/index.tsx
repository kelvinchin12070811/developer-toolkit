import { FaGithub } from 'react-icons/fa';

export function Navbar() {
  return (
    <div className='navbar sticky top-0 z-40 bg-base-100 shadow-sm pl-3 pr-3'>
      <div className='flex-1'>
        <a className='text-xl font-bold p-1'>/://Developer Toolkit</a>
      </div>
      <div className='flex gap-2'>
        <div className='tooltip tooltip-left' data-tip='GitHub Repository'>
          <a
            href='https://github.com/kelvinchin12070811/developer-toolkit'
            target='_blank'
            rel='noopener noreferrer'
            className='p-0 cursor-pointer'
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
