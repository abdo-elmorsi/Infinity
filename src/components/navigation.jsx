export const Navigation = (props) => {
  return (
    <nav id='menu' className="navbar navbar-default navbar-expand-lg navbar-light  fixed-top">
      <div className='container'>
        <div className="navbar-header  d-flex justify-content-between">
          <a className="navbar-brand page-scroll" href="#">
            <img width={130} height={45} src="/img/logo.png" alt="logo" />
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
