import Head from "next/head";
import Header from "../components/header/header";
import AboutMe from "./about-me";


export default function Home() {

  return (
    <div className="container custom-grid">
        <AboutMe />
    </div>
  );
}
