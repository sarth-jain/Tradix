import React from "react";

const appList = [
  {
    name: "Kite",
    description: "The trading platform. Web and app.",
    img: "https://zerodha.com/static/images/products/kite.png",
    link: "https://kite.zerodha.com",
    color: "#387ED1",
  },
  {
    name: "Console",
    description: "The backoffice. Reports & more.",
    img: "https://zerodha.com/static/images/products/console.png",
    link: "https://console.zerodha.com",
    color: "#F5A623",
  },
  {
    name: "Coin",
    description: "Direct mutual funds.",
    img: "https://zerodha.com/static/images/products/coin.png",
    link: "https://coin.zerodha.com",
    color: "#45B28D",
  },
  {
    name: "Varsity",
    description: "Free stock market education.",
    img: "https://zerodha.com/static/images/products/varsity.png",
    link: "https://varsity.zerodha.com",
    color: "#F05C5C",
  },
  {
    name: "Sensibull",
    description: "Options trading platform.",
    img: "https://zerodha.com/static/images/products/sensibull.png",
    link: "https://sensibull.com",
    color: "#7B68EE",
  },
  {
    name: "Streak",
    description: "Algo trade without coding.",
    img: "https://zerodha.com/static/images/products/streak.png",
    link: "https://streak.tech",
    color: "#1ABC9C",
  },
];

const Apps = () => {
  return (
    <>
      <h3 className="title">Apps</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px 0",
        }}
      >
        {appList.map((app, index) => (
          <a
            key={index}
            href={app.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: app.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                {app.name[0]}
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "15px" }}>
                  {app.name}
                </p>
                <p style={{ margin: 0, color: "#888", fontSize: "13px" }}>
                  {app.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Apps;