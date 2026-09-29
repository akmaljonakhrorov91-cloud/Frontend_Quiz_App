//components
import { MenuLinks } from "../components";
function Home() {
  return (
    <section className="home-container container">
      <div className="home-content">
        <h1 className="home-title">
          <span>Welcome to the</span>
          <span>FrontEnd Quiz App</span>
        </h1>
        <p>pick a subject to start the test</p>
      </div>
      <div className="home-nav-list">
        <MenuLinks />
      </div>
    </section>
  );
}

export default Home;
