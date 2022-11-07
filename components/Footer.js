import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 px-32 space-y-10 text-gray-600 bg-gray-100 md:grid-cols-4 py-14 ">
      <div className="pt-10 space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Privacy</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Tshembani Mhlongo</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Clone</p>
        <p>Into Life</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Please Hire Me</p>
        <p>Open To Work</p>
        <p>We win</p>
      </div>
    </div>
  );
}

export default Footer;
