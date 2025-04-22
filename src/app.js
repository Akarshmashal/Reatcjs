import { React } from "react"; //rect and react dom coming from node module
import { createRoot } from "react-dom/client";
//Default import
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

// //Named Import
// import Header,{ Title } from "./components/Header";

//Config riven UI

const Applayout = () => {
  return (
    <>
      {/* these are reactfragment comes from reat library */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};

//Resct Fragment
//jsx can only have one parent element
//Rect fragment is empty

const root = createRoot(document.getElementById("root"));
root.render(<Applayout />);
