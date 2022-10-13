import React from "react";
import CustomCarousal from "../Components/Carousal";
import CatHomePage from "../data/categoriesHomepage";

import {
  Card,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <React.Fragment>
      <Container>
        <div><CustomCarousal /></div>
        <div ><Card><img src="https://unsplash.com/photos/N3bDG_cUj64/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NjY4ODI5&force=true&w=2400"></img></Card></div>
        <div className="d-flex flex-wrap">
          {CatHomePage.map((item) => {
            return (
              <div className="avatar-big m-4" key={item.name}>
                <Link style={{textDecoration: 'none', color:'gray', fontWeight:'500'}} to={`/products/${item.category}`}>
                  <img
                    className="avatar-img rounded-circle"
                    src={item.imgUrl}
                  />
                  <div className="text-center m-2">{item.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
        <div className="mt-5"><Footer/></div>
    </React.Fragment>
  );
}

