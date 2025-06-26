import { FaHome } from 'react-icons/fa';
import { BiSolidTagAlt } from 'react-icons/bi';
import { MenuItem } from '@/components/MainDrawer/MenuItem.tsx';
import { IoSettings } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa6';
import { TbAlphabetLatin } from 'react-icons/tb';

const MENU_ITEM_ICON_SIZE = 24;

export function DrawerContent() {
  return (
    <>
      <MenuItem to='/'>{renderMenuIcon(FaHome)} Home</MenuItem>
      <li className='menu-item mt-4 mb-2'>Generators</li>
      <MenuItem to='/generators/characters'>{renderMenuIcon(TbAlphabetLatin)} Characters</MenuItem>
      <MenuItem to='/generators/timestamp'>{renderMenuIcon(FaClock, 18)} Timestamp</MenuItem>
      <MenuItem to='/generators/ulid'>{renderMenuIcon(BiSolidTagAlt)} ULID</MenuItem>
      <MenuItem to='/generators/uuid'>{renderMenuIcon(BiSolidTagAlt)} UUID</MenuItem>

      <li className='menu-item mt-4 mb-2'>Configuration</li>
      <MenuItem to='/settings'>{renderMenuIcon(IoSettings)} Settings</MenuItem>
    </>
  );
}

function renderMenuIcon(Icon: React.ComponentType<{ size?: number }>, size?: number) {
  return <div className="w-6 flex justify-center"><Icon size={size ?? MENU_ITEM_ICON_SIZE} /></div>;
}
