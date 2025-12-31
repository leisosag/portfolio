interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const NavItem = ({
  href,
  label,
  active = false,
  onClick,
}: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`group flex items-center gap-2 mb-5 ${
          active ? 'active' : ''
        }`}
      >
        <span className="mt-px h-1 w-1 rounded-full bg-burgundy opacity-0 transition-opacity group-[.active]:opacity-90" />
        <span className="text-sm font-bold transition-colors text-slate-500 group-hover:text-burgundy/90 group-[.active]:text-burgundy/90">
          {label}
        </span>
      </a>
    </li>
  );
};
