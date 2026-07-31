import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <img src="/pics/group-photo-boxers.jpg" className="home-img" />
      <h1 className="home-title">Combat Boxing Randers</h1>
      <p className="home-description">
        Drømmer du om at prøve kræfter med bokseringen - eller vil du bare have
        effektiv træning med mening? Vi tilbyder seriøs boksetræning med plads
        til både begyndere og øvede.
      </p>
      <button className="home-button">
        <a href="#Træningstider">Læs mere</a>
      </button>
    </div>
  );
}

export default Home;
