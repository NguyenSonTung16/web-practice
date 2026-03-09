type HeaderProps = {
  onOpenSidebar: () => void;
  onMenuClick: () => void;
};

const MENU_ITEMS = ["Trang chu", "Khoa hoc", "Giang vien", "Lien he"];

export default function Header({ onOpenSidebar, onMenuClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="name-tag">
        <button className="header-navbar" onClick={onOpenSidebar} aria-label="Open sidebar">
          ☰
        </button>
        <a href="#" className="title">
          It course
        </a>
      </div>
      <nav className="menu" aria-label="Main menu">
        {MENU_ITEMS.map((item) => (
          <button key={item} className="menu-item" onClick={onMenuClick}>
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
