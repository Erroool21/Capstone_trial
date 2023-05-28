import './styles.css'

export default function Footer(){
    return(
<div>
  <footer class="text-center " style={{backgroundColor: "#19376D"}}>
    <div class="container">
      <section class="mt-5">
        <div class="row text-center d-flex justify-content-center pt-5">
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/" class="">About us</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/" class="">Products</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/" class="">Awards</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/" class="">Help</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="/" class="">Contact</a>
            </h6>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <section class="mb-3">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p style={{color: "#A5D7E8" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>

      <section class="text-center mb-1">
        <a href="/" class=" me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="/" class=" me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="/" class=" me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="/" class=" me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="/" class=" me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="/" class=" me-4">
          <i class="fab fa-github"></i>
        </a>
      </section>
    </div>

    <div
         class="text-center p-3 text-white"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>© 2023 Copyright:
      <a class="text-decoration-none fst-italic" style={{color: "#A5D7E8"}} href="https://mdbootstrap.com/"> Group 3 - Capstone Project</a>
    </div>
  </footer>
</div>
    );
};