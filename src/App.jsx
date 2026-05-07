import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="about">
        <h2>About Us</h2>

        <p>
          WaterFall Restaurant is a thematic restaurant with peaceful
          waterfall dining and delicious South Indian, North Indian,
          Chinese and Tandoori dishes.
        </p>
      </section>

      <section className="special">
        <h2>Our Specialities</h2>

        <div className="cards">

          <div className="card">
            <h3>Lunch</h3>
            <p>Special lunch meals and thali varieties.</p>
          </div>

          <div className="card">
            <h3>Dinner</h3>
            <p>Enjoy tasty starters and dinner combos.</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;