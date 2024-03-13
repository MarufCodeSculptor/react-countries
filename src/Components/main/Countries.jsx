/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function Countries() {
  const [countris, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // handling  the visited country showing in the top ------------------
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountryList = (country) => {
    const updatedResult = [...visitedCountry, country];
    setVisitedCountry(updatedResult);
    console.log(visitedCountry);
  };
  // handling the visited or non visited toggle ----------
  


  return (
    <>
      <div className="text-4xl font-bold uppercase text-center  p-10  bg-pink-300 text-white">
        <h3>Let's Explore the Earth</h3>
        <h2>
          There is-
          <span>{countris.length}</span>
          _Countries You can know about
        </h2>
      </div>
      <div className="p-5 md:p-10 flex flex-col-reverse md:flex-row gap-5">
        {/*  showing all country hre ---- */}
        <div className="min-h-screen  w-8/12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-10 p-5 md:p-0">
          {countris.map((country) => (
            <CountryCard 
          
              handleCountry={handleVisitedCountryList}
              key={country.cca3}
              country={country}
            ></CountryCard>
          ))}
        </div>
        {/* visited country list ---------- */}
        <div className="w-4/12	">
          <h2 className="text-3xl text-center font-bold uppercase p-5 bg-pink-200 my-5">
            Visited Country :{" "}
            <span className="ms-3 font-extrabold text-blue-500">
              {visitedCountry.length}
            </span>{" "}
          </h2>
          {visitedCountry.map((cun) =>(
            <h2 className="border p-5 text-xl font-bold bg-blue-100 my-2 rounded-lg">
              {cun.name.common}{" "}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
}
