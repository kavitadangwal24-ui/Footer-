
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main className="demo-main" id="home">
        <span className="demo-label">REUSABLE COMPONENT</span>

        <h1>
          Designed to connect.
          <br />
          Built to inspire.
        </h1>

        <p>
          A modern, responsive footer experience for your next digital project.
        </p>

        <a className="demo-button" href="#footer">
          Explore the footer ↓
        </a>
      </main>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
