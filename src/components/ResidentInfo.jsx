import axios from "axios";
import { useEffect, useState } from "react";
import DeadSign from "./DeadSign";
import AliveSign from "./AliveSign";

const ResidentInfo = ({ urlCharacter }) => {
  const [charDetail, setCharDetail] = useState();
  let status = charDetail?.status
  useEffect(() => {
    axios.get(urlCharacter).then((resp) => {
      console.log(resp.data);
      setCharDetail(resp.data);
    });
  }, []);
  return (
    <section className="card">
      <div className="card__wrapper">
        <img
          className="card__img"
          src={charDetail?.image}
          alt=""
          loading="lazy"
        />
        <article className="card__info">
          <h1 className="card__info--title">{charDetail?.name}</h1>
          <p>
            <span className="card__info--property">Species:</span> {charDetail?.species}
          </p>
          <p>
            <span className="card__info--property">Origin:</span> {charDetail?.origin.name}
          </p>
          <p>
            <span className="card__info--property">Times Appear:</span> {charDetail?.episode?.length}
          </p>
        </article>
        {
            (status === "Dead") && <DeadSign/>
        }
        {
            (status === "Alive") && <AliveSign/>
        }
      </div>
    </section>
  );
};

export default ResidentInfo;
