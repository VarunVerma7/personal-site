import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
