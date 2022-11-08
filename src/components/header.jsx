import { useTranslation } from "react-i18next";

export const Header = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div id="carouselExampleIndicators" className="header carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {props?.data ? (<>
            {props?.data.map((ele, i) => {
              return <div className={`carousel-item ${i == 0 ? "active" : ""}`} key={i}>
                <img className="d-block w-100" src="/img/intro-bg.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="font-weight-bold">{t(ele?.title)}</h1>
                  <p className="lead text-white">{t(ele?.paragraph)}</p>
                </div>
              </div>
            })}

          </>

          ) : ("loading")}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>

          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,96L30,85.3C60,75,120,53,180,85.3C240,117,300,203,360,208C420,213,480,139,540,122.7C600,107,660,149,720,181.3C780,213,840,235,900,213.3C960,192,1020,128,1080,96C1140,64,1200,64,1260,85.3C1320,107,1380,149,1410,170.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
          </path>
        </svg>
      </div>
    </>
  )
}
