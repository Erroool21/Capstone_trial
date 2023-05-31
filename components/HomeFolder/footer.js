import './styles.css'

export default function Footer(){
    return(
<div>
  <footer className="text-center " style={{backgroundColor: "#19376D"}}>
    <div className="container">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/" className="">About us</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/" className="">Products</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/" className="">Awards</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/" className="">Help</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/" className="">Contact</a>
            </h6>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      <section className="mb-3">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p style={{color: "#A5D7E8" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-1">
        <a href="/" className=" me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className=" me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className=" me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className=" me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className=" me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="/" className=" me-4">
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>

    <div
         className="text-center p-3 text-white"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>© 2023 Copyright:
      <a className="text-decoration-none fst-italic" style={{color: "#A5D7E8"}} href="https://mdbootstrap.com/"> Group 3 - Capstone Project</a>
    </div>
  </footer>
</div>
    );
};