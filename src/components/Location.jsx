const Location = () => {
  return (
    <div>
      <div className="search">
        <input className="search__input" type="text" id=""/>
        <button className="search__button btn"><i class='bx bx-search'></i>Search</button>
      </div>
      <section className="location">
        <div className="location__container">
          <article className="location__property">
            <h1 className="location__property--title">Nombre</h1>
            <span className="location__property--value">Ubi de prueba</span>
          </article>
          <article className="location__property">
            <h2 className="location__property--title">Tipo</h2>
            <span className="location__property--value"></span>
          </article>
          <article className="location__property">
            <h2 className="location__property--title">Dimensión</h2>
            <span className="location__property--value"></span>
          </article>
          <article className="location__property">
            <h2 className="location__property--title">Población</h2>
            <span className="location__property--value"></span>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Location;
