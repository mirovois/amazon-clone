import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Boston_skyline_from_Longfellow_Bridge_September_2017_panorama_2.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123345"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="123346"
            title="Kenwood kMix Stand Mixer"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            // "https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123347"
            title="Samsung LG 49' Curved LED"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={2}
          />
          <Product
            id="123348"
            title="New Apple Ipad Pro - Silver(4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={5}
          />
          <Product
            id="123349"
            title="Kenwood kMix Stand Mixer"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            // "https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="123341"
            title="Samsung LG 49' Curved Gaming Monitor"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
