import "./home.css";

export const Home = () => {
  return (
    <div id="home" className="body">
      <div
        className="container text-center h-100  align-items-center justify-content-center  "
        style={{ minHeight: "100vh" }}
      >
        <h1
          style={{
            paddingTop: "20%",
            letterSpacing: "2px",
            wordSpacing: "5px"
          }}
        >
          {/* vh-100 */}
          <span style={{ color: "grey" }}>I'm</span>
          <u> Mantosh Kumar</u>
        </h1>
        <h1>
          <span style={{ color: "grey" }}>I'm a </span>
          <u>full stack reactsjs Developer</u>
        </h1>
        <p
          style={{
            textAlign: "left",
            fontSize: "2rem",
            padding: "30px",
            letterSpacing: "2px",
            wordSpacing: "5px"
          }}
        >
          I'm a full Stack developer in building exceptional digital experience
          .Currently I'm a focused on building full stack web application
        </p>
        <a
          href="#project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-outline-primary btn-lg text-white "
          style={{ fontSize: "2rem" }}
        >
          Projects{" "}
          <span>
            {" "}
            <i class=" bi bi-arrow-right-square-fill"></i>
          </span>
        </a>
        <a
          href="./mantosh_Resume(1).pdf"
          target="blank"
          download
          className="btn btn-outline-primary btn-lg m-3 text-white"
          style={{ fontSize: "2rem" }}
        >
          Resume{" "}
          <span>
            {" "}
            <i class="bi bi-download"></i>
          </span>
        </a>
      </div>
    </div>
  );
};
