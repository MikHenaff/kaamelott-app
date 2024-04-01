import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import Card from "./Card";
import RandCharQuotButton from "./RandCharQuotButton";
import Footer from "./Footer";
import SpinnerLoader from "./SpinnerLoader";

function App() {
  const [infos, setInfos] = useState({});
  const [quotation, setQuotation] = useState("");

  const fetchRandQuot = async () => {
    try {
      axios.get("/api/random").then((response) => {
        const data = response.data;
        setInfos(data.infos);
        setQuotation(data.citation);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const name = infos?.personnage;
  const actor = infos?.acteur;
  const season = infos?.saison;
  const episode = infos?.episode;
  const picture = `https://kaamelott.chaudie.re/api/personnage/${name}/pic`;

  const fetchRandCharQuot = async () => {
    try {
      axios.get(`/api/random/personnage/`).then((response) => {
        const data = response.data;
        setInfos(data.infos);
        setQuotation(data.citation);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-full pb-[80px]">
      <Home />
      <button
        onClick={() => fetchRandQuot()}
        className="block m-auto mb-10 p-2  text-black bg-[#faebd7] rounded-lg hover:scale-105"
      >
        Voir une citation au hasard
      </button>
      {quotation && (
        <>
          <Card
            picture={picture}
            name={name}
            actor={actor}
            season={season}
            episode={episode}
            quotation={quotation}
          />
          <RandCharQuotButton name={name} onClick={() => fetchRandCharQuot()} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
