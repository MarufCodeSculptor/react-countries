/* eslint-disable react/prop-types */

const CountryCard = ({ country }) => {
  //   object ended here -----------------
  console.log(country);
  return (
    <div className="bg-pink-50 p-10 rounded-lg text-white shadow-xl ">
      <div>
        {/* country image -------------- */}
        <div className="avatar">
          <img src={country.flags.png} />
        </div>
        <h2 className="text-2xl font-bold text-blue-600">
          {" "}
          Name: <span className="text-[#181D27]">{country["name"].common}</span>
        </h2>
        <h4 className="text-xl text-purple-700">{country["capital"]}</h4>
        <h4 className="text-xl font-bold capitalize">
          {country["independent"] ? (
            <span className="text-green-500">independent</span>
          ) : (
            <span className="text-red-600">not independent</span>
          )}
        </h4>
        <div className="mt-5">
          <button className="btn btn-active btn-primary">More info</button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
