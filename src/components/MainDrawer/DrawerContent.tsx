import { FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';
import { BiSolidTagAlt } from 'react-icons/bi';

const MENU_ITEM_ICON_SIZE = 24;

export function DrawerContent() {
  const location = useLocation();

  const checkIsActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <li>
        <a className={checkIsActive('/') ? 'menu-active' : ''} href='/'>
          {renderMenuIcon(FaHome)} Home
        </a>
      </li>
      <li className='menu-item mt-4 mb-2'>Generators</li>
      <li>
        <Link
          to='/generators/uuid'
          className={checkIsActive('/generators/uuid') ? 'menu-active' : ''}
        >
          {renderMenuIcon(BiSolidTagAlt)} UUID Generator
        </Link>
      </li>
      <li>
        <a>{renderMenuIcon(BiSolidTagAlt)} ULID Generator</a>
      </li>
    </>
  );
}

function renderMenuIcon(Icon: React.ComponentType<{ size?: number }>) {
  return <Icon size={MENU_ITEM_ICON_SIZE} />;
}
