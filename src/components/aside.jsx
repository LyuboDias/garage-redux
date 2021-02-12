import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('/assets/images/mechanic.jpeg')"}}></div>
      <img className="logo" src="/assets/images/db-web-trans.png" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, great professionals.</p>
      {props.children}
    </div>
  );
}

export default Aside;
