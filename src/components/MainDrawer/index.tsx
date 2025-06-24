import { DrawerContent } from '@/components/MainDrawer/DrawerContent.tsx';

interface MainDrawerProps {
  children?: React.ReactNode;
}

export function MainDrawer({ children }: MainDrawerProps) {
  return (
    <nav className='drawer lg:drawer-open'>
      <input id='main-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* Page content here */}
        {children}
      </div>

      <aside className='drawer-side h-[calc(100vh-4rem)] top-16'>
        <label htmlFor='main-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
          {/* Sidebar content here */}
          <DrawerContent />
        </ul>
      </aside>
    </nav>
  );
}
