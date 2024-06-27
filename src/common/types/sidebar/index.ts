export interface SidebarProps {
  isNonMobile: boolean;
  drawerWidth: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
