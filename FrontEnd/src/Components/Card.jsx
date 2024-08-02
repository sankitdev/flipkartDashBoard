const Card = ({ item, data }) => {
  return (
    <>
      <div className="w-48 h-28 bg-blue-400 m-10 ">
        <h1 className="text-sm p-2 font-bold text-white">{item}</h1>
        <p className="text-white text-4xl pl-2 font-bold">{data}</p>
      </div>
    </>
  );
};

export default Card;
