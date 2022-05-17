import newslogo from "../../project_image/newslogo.png";
import galeryLogo from "../../project_image/galeryLogo.jpg";
import chalAppllogo from "../../project_image/chatAppLogo.png";
import translaterlogo from "../../project_image/translaterLogo.png";
import weatherlogo from "../../project_image/weatherApplogo.jpg";
import ecommercelogo from "../../project_image/ecommerceLogo.png";
import maillogo from "../../project_image/maillogo.webp";

export const Work = () => {
  return (
    <div
      id="project"
      className="container "
      style={{ minHeight: "100vh", paddingTop: "3%" }}
    >
      <h1 className="text-center p-1" style={{ fontSize: "3rem" }}>
        {" "}
        <u>Projects</u>
      </h1>
      <div className="row" style={{ paddingTop: "7%", paddingLeft: "10%" }}>
        <div className="col col-md-3 col-sm-6 pt-4  ">
          <div class="card" style={{ width: "10rem", border: "none" }}>
            <img
              style={{ width: "8rem", height: "8rem", padding: "auto" }}
              src={newslogo}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <u>News Api</u>
              </h5>

              <a href="https://github.com/mantoshkichni/news" class="btn  code">
                Go To Code <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 pt-4 ">
          <div class="card" style={{ width: "10rem", border: "none" }}>
            <img
              style={{ width: "8rem", height: "8rem" }}
              src={galeryLogo}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <u>Gallery</u>
              </h5>

              <a
                href={"https://github.com/mantoshkichni/react_gallery"}
                class="btn  code"
              >
                Go To Code <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 pt-4 ">
          <div class="card" style={{ width: "10rem", border: "none" }}>
            <img
              style={{ width: "8rem", height: "8rem" }}
              src={chalAppllogo}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <u>Chat App</u>
              </h5>

              <a
                href="https://github.com/mantoshkichni/node-chatapp"
                class="btn  code"
              >
                Go To Code <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 pt-4 ">
          <div class="card" style={{ width: "10rem", border: "none" }}>
            <img
              style={{ width: "8rem", height: "8rem" }}
              src={maillogo}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <u>Mail Sender</u>
              </h5>

              <a href="#" class="btn  code">
                Go To Code <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className=" col-md-3 col-sm-6 pt-4  ">
          <div class="card" style={{ width: "10rem", border: "none" }}>
            <img
              style={{ width: "8rem", height: "8rem" }}
              src={translaterlogo}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <u>Translater</u>
              </h5>

              <a
                href="https://github.com/mantoshkichni/translater"
                class="btn  code"
              >
                Go TO Code <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 pt-4 ">
          <div class="card" style={{ width: "10rem", border: "none" }}>
            <img
              style={{ width: "8rem", height: "8rem" }}
              src={weatherlogo}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <u>Weather APP</u>
              </h5>

              <a
                href="https://github.com/mantoshkichni/node-3-weathername"
                class="btn  code"
              >
                Go To Code <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 pt-4 ">
          <div class="card mb-5" style={{ width: "10rem", border: "none" }}>
            <img
              style={{ width: "8rem", height: "8rem" }}
              src={ecommercelogo}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <u>eCommerce </u>
              </h5>

              <a
                href="https://github.com/mantoshkichni/full_ecommerce_website"
                class="btn  code "
              >
                Go To Code <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
