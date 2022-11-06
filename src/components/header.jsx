export const Header = (props) => {
  return (
    <div id="carouselExampleIndicators" class="header carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/img/intro-bg.jpg" alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="h1">{props.data ? props.data.title : 'Loading'}</h5>
            <p className="lead">{props.data ? props.data.paragraph : 'Loading'}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/intro-bg.jpg" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="h1">{props.data ? props.data.title : 'Loading'}</h5>
            <p className="lead">{props.data ? props.data.paragraph : 'Loading'}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/intro-bg.jpg" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="h1">{props.data ? props.data.title : 'Loading'}</h5>
            <p className="lead">{props.data ? props.data.paragraph : 'Loading'}</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}
