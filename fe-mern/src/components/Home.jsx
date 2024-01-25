import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [jewelryData, setJewelryData] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios("http://localhost:3001/card/getAll");
        const data = response.data;
        setJewelryData(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <div className="row mx-5 ">
        {jewelryData.map((jewelry) => (
          <div key={jewelry._id} className="col-md-3 mb-3 ">
            <div className="card ">
              <img
                src={jewelry.image}
                className="card-img-top"
                alt={`Jewelry  ${jewelry.id}`}
              />
              <div className="card-body">
                <h5 className="card-title">{jewelry.title}</h5>
                <p className="card-text">{jewelry.description}</p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
