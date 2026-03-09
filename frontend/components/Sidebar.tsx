type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SIDEBAR_ITEMS = ["Home", "About", "Services", "Gallery", "Contact"];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={onClose} />
      <nav className={`sidebar ${isOpen ? "active" : ""}`}>
        <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">
          x
        </button>
        <ul className="sidebar-menu">
          {SIDEBAR_ITEMS.map((item, index) => (
            <li key={item} className={`sidebar-menu-item ${index === 0 ? "active" : ""}`}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
