import { FaGithub } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

export function Navbar() {
  return (
    <div className='navbar sticky top-0 z-40 bg-base-100 shadow-sm pl-3 pr-3'>
      <div className='flex-1'>
        <label htmlFor='main-drawer' className='drawer-button btn btn-ghost btn-square lg:hidden'>
          <MdMenu size={24} />
        </label>
        <a className='btn btn-ghost text-xl font-bold p-1'>/://Developer Toolkit</a>
      </div>
      <div className='flex gap-2'>
        <div className='tooltip tooltip-left' data-tip='GitHub Repository'>
          <a
            href='https://github.com/kelvinchin12070811/developer-toolkit'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-ghost btn-square w-10 h-10'
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
