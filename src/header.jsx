const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">MY DIARY</a>
        </div>
        <div className="navbar-end">
          <a
            className="btn"
            onClick={() => {
              localStorage.removeItem("entries");
              localStorage.removeItem("dates");
            }}
          >
            Clear All Entries
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
