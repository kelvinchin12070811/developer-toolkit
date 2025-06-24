import { FaHome } from 'react-icons/fa';
import { BiSolidTagAlt } from 'react-icons/bi';
import { MenuItem } from '@/components/MainDrawer/MenuItem.tsx';

const MENU_ITEM_ICON_SIZE = 24;

export function DrawerContent() {
  return (
    <>
      <MenuItem to='/'>{renderMenuIcon(FaHome)} Home</MenuItem>
      <li className='menu-item mt-4 mb-2'>Generators</li>
      <MenuItem to='/generators/uuid'>{renderMenuIcon(BiSolidTagAlt)} UUID Generator</MenuItem>
      <MenuItem to='/generators/ulid'>{renderMenuIcon(BiSolidTagAlt)} ULID Generator</MenuItem>
    </>
  );
}

function renderMenuIcon(Icon: React.ComponentType<{ size?: number }>) {
  return <Icon size={MENU_ITEM_ICON_SIZE} />;
}
