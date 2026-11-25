import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row p-5" >
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected.."></input>{" "}
          <br />
          <a href="">Track account opening</a>
          <a href="" className="mx-3">Track segment activation</a>
          <a href="" className="ml-3">Intraday margin</a>
          <a href="" className="mx-3">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          1.<a href="">Current Takeovers and Delisting - January 2024</a> <br />
          2.<a href="">Latest Intraday leverages - MIS & CO</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
