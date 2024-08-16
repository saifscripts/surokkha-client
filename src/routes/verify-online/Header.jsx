import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <header className="su-h-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand main-logo" href="/">
            <img width="" className="img-fluid" src={logo} alt="Surokkha" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav3"
            aria-controls="navbarNav3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  হোম<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/enroll">
                  নিবন্ধন
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vaccine-card">
                  টিকা কার্ড
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/certificate">
                  টিকা সনদ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/verify">
                  টিকা সনদ যাচাই
                </a>
              </li>
            </ul>
            <a
              href="javascript:void(0)"
              className="nav-link btn ml-lg-2 su-lang-btn"
            >
              English
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
