import "./App.css";
import Body from "./Components/Includes/Body";
import Footer from "./Components/Includes/Footer";
import Navbar from "./Components/Includes/Navbar";
import Container from "./Components/hoc/container";
import Index from "./Pages/Index/Index";

function App() {
  return (
    <Container>
      <Navbar />
      <Body>
        <Index />
      </Body>
      <Footer />
    </Container>
  );
}

export default App;
