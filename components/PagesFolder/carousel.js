

export default function carousel(){
    return(
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <center>
    <div className="carousel-item active">
        <img src="https://img.philkotse.com/2020/01/11/b7Fg1q9w/bus-in-the-philippines-7b69.jpg" className="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.philkotse.com/2020/01/11/b7Fg1q9w/bus-in-the-philippines-7b69.jpg" className="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbAxVlnaf7ze0oUhIwpUt4sxBSYAHfdD1GRzpW8PJCcvbUhAPmAruYfS_S4UoKkeHuiw&usqp=CAU" className="d-block w-100" alt="..."/>
    </div>
    </center>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
};