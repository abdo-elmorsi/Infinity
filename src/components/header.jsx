import { useTranslation } from "react-i18next";

export const Header = (props) => {
  const { t } = useTranslation();
  return (
    <div id="carouselExampleIndicators" class="header carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        {props?.data ? (
          props?.data.map((ele, i) => {
            return <div class={`carousel-item ${i == 0 ? "active" : ""}`} key={i}>
              <img class="d-block w-100" src="/img/intro-bg.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="h1">{t(ele?.title)}</h5>
                <p className="lead">{t(ele?.paragraph)}</p>
              </div>
            </div>
          })
        ) : ("loading")}
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
