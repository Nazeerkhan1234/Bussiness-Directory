import React, { useEffect, useState } from "react";
export default function Home() {
  const [BussinessCategory, SetBussinessCategory] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:1337/api/bussiness-directories?populate=*`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.data);
        SetBussinessCategory(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Home Pge</h1>
      <ul className="nav">
        {BussinessCategory.map((cv, idx, arr) => {
          return (
            <li key={idx} className="me-3">
              <a href="#">
                <img
                  src={
                    "http://localhost:1337" +
                    cv.attributes.image.data.attributes.url
                  }
                />
                <br />
                {cv.attributes.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
