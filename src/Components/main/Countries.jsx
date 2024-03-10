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
  console.log(countris);
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-10 p-5 md:p-0">
        {countris.map((country) => (
          <CountryCard key={country.cca3} country={country}></CountryCard>
        ))}
      </div>
    </>
  );
}
