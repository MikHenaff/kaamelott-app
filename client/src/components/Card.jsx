function Card({ picture, name, actor, season, episode, quotation }) {
  return (
    <div className="flex flex-col items-center m-auto w-3/5 md:max-w-2xl p-5 shadow-[0_0_10px_0_#faebd7] rounded-lg">
      <img
        src={`${picture}`}
        alt={`Le portrait de ${name} n'est pas disponible`}
        className="w-[200px] rounded-lg"
      />
      <h2 className="m-3 text-3xl text-center leading-6">
        {`${name}`}
        <br />
        <span className="text-xl">{`(${actor})`}</span>
      </h2>
      <p className="text-lg">{`${season}`}</p>
      <p className="mb-5 text-center text-lg leading-4">
        {`Episode: ${episode}`}
      </p>
      <p className="text-xl text-center">{`« ${quotation} »`}</p>
    </div>
  );
}

export default Card;
