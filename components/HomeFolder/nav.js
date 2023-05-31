import './styles.css';
import Logo from './images/logobus.png';
import Banner from './images/banner1.png';

function nav(){
    return(
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={Logo} alt="" style={{height: '50px'}}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/passengerForm'>Book Now</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Destinations
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-dark" href="/">Baguio</a></li>
            <li><a className="dropdown-item text-dark" href="/">Tagaytay</a></li>
            <li><a className="dropdown-item text-dark" href="/">Manila</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div>
  <section className=''>
    <img class="img-fluid" src={Banner} alt=''/>
  </section>
</div>
</div>
      );
}
export default nav;