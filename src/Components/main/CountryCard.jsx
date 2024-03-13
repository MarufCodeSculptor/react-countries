/* eslint-disable react/prop-types */
import { useState } from "react";
const CountryCard = ({ country, handleCountry,}) => {
  const { name, capital, independent, flags, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const togleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div
      className={
        (visited && "bg-blue-300 rounded-xl") ||
        "bg-blue-100 rounded-xl text-white"
      }
    >
      <div className="p-10 rounded-lg text-white shadow-xl h-full ">
        <div>
          {/* country image -------------- */}
          <div className="avatar">
            <img src={flags.png} />
          </div>
          <h2 className="text-2xl font-bold text-blue-600">
            {" "}
            Name: <span className="text-[#181D27]">{name.common}</span>
          </h2>
          <h4 className="text-xl text-purple-700">{capital}</h4>
          <h4 className="text-xl font-bold capitalize">
            {independent ? (
              <span className="text-green-500 uppercase font-extrabold">
                independent
              </span>
            ) : (
              <span className="text-red-600 uppercase font-extrabold">
                not independent
              </span>
            )}
          </h4>
          <h4 className="text-lg text-red-500"> code: {cca3}</h4>
          {/* button container */}
          {/* togle button one */}
          <div className="mt-5">
            <div className="form-control w-52">
              <label className="cursor-pointer ">
                <input
                  onClick={togleVisited}
                  type="checkbox"
                  className="toggle toggle-secondary"
                />
              </label>
            </div>
          </div>
          {/* toggle button two  */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Mark as Visited</span>
              <input
                onClick={() => handleCountry(country)}
                type="checkbox"
                className="checkbox checkbox-primary"
              />
            </label>
          </div>

          <div className="text-blue-800">
            {" "}
            {(visited && (
              <span className="text-2xl text-green-500">Visited</span>
            )) || <span className="text-xl text-red-600">not visited</span>}
          </div>
          <button className="btn btn-active btn-primary capitalize text-xl font-bold">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
