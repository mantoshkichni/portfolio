import "./home.css";
export const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="container  pt-5"
      style={{ minHeight: "100vh" }}
    >
      {/* vh-100 */}
      <h1
        className="text-center"
        style={{ fontSize: "5rem", paddingTop: "10%" }}
      >
        <u>About Me</u>
      </h1>
      <div className="row" style={{ paddingTop: "5%" }}>
        <div className="col col-6   ">
          <h1
            class="h11"
            style={{
              textAlign: "right",
              padding: "5px",
              letterSpacing: "2px",
              wordSpacing: "5px"
            }}
          >
            Hi I'm Mantosh Kumar nice to meet you.Please take a look around!
          </h1>
        </div>
        <div className="col col-6">
          <p
            style={{
              textAlign: "left",
              fontSize: "1.3rem",
              letterSpacing: "2px",
              wordSpacing: "5px",
              padding: "5px"
            }}
          >
            I am passonate about building excellent software that improves ,the
            lives of those around me.I specialize in crerating software for
            clients ranging from individuals and small login form all the way to
            real time chat app and ecommerce .What would you do if you had a
            software expert available at your fingerTips?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
