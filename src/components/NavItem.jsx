import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

export default function NavItem({ to, children }) {
  let { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={clsx(
        'flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50',
        {
          'bg-gray-100 dark:bg-gray-800': pathname === to,
        }
      )}
    >
      {children}
    </Link>
  );
}
