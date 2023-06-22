import { Fragment } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Fragment>
        <Header/>
        <main>
          <Home/>
        </main>
        <Footer/>
    </Fragment>
  );
}

export default App;
