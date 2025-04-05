import { Lexend_Deca } from "next/font/google";
import Header from "./_components/header";

const lexandDeca = Lexend_Deca({
  variable: "--lexand-deca",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className={`${lexandDeca.className}`}>
      <Header />
    </div>
  );
};

export default Home;
