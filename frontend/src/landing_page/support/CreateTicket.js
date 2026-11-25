import React from "react";

const categories = [
  {
    title: "Account Opening",
    icon: "fa fa-plus-circle",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa fa-user",
    links: [
      "Profile",
      "Bank and DP Account",
      "Nomination",
      "DDPI / POA",
      "Segment Activation",
      "Password / 2FA",
    ],
  },
  {
    title: "Trading and Markets",
    icon: "fa fa-line-chart",
    links: [
      "Kite — Web and app",
      "Order Types",
      "GTT — Good Till Triggered",
      "Basket Orders",
      "Smallcase",
      "Sensibull",
      "Streak",
    ],
  },
  {
    title: "Funds",
    icon: "fa fa-money",
    links: [
      "Add Funds",
      "Withdraw Funds",
      "Add Bank Account",
      "Payment Gateway Issues",
      "DP charges",
    ],
  },
  {
    title: "Console",
    icon: "fa fa-bar-chart",
    links: [
      "Portfolio",
      "P&L / Tax Reports",
      "Ledger",
      "Contract Notes",
      "LTCG Statement",
    ],
  },
  {
    title: "Coin — Mutual Funds",
    icon: "fa fa-circle",
    links: [
      "Coin App and Web",
      "Mutual Fund Order",
      "SIP",
      "Lumpsum Investment",
      "Redemption / Withdrawal",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-3 mt-3 mb-5">
        <h1 className="mb-4">To create a Ticket, select a relevant topic</h1>
        {categories.map((cat, i) => (
          <div className="col-4 p-4 mt-3" key={i}>
            <h4>
              <i className={cat.icon} aria-hidden="true"></i> {cat.title}
            </h4>
            {cat.links.map((link, j) => (
              <span key={j}>
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                  {link}
                </a>
                <br />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
