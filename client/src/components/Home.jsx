import logo from "../assets/img/kaamelott-logo.png";

function Home() {
  return (
    <h1 className="w-fit m-auto pt-8 mb-12 text-3xl">
      Les Citations de
      <span>
        <img src={logo} alt="logo" className="w-[350px]" />
      </span>
    </h1>
  );
}

export default Home;
