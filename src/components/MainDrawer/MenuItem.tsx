import { Link, useLocation } from 'react-router';
import { cn } from '@/utils/cn.ts';

interface MenuItemProps {
  children?: React.ReactNode;
  to: string;
}

export function MenuItem({ children, to }: MenuItemProps) {
  const location = useLocation();

  const checkIsActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <li>
      <Link to={to} className={cn({ 'menu-active': checkIsActive(to) })}>
        {children}
      </Link>
    </li>
  );
}
