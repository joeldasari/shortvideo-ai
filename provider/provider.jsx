import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { UserContextProvider } from "@/context/user-context";
import { Lexend_Deca } from "next/font/google";

const lexandDeca = Lexend_Deca({
  variable: "--lexand-deca",
  subsets: ["latin"],
});

export default function Provider({ children }) {
  return (
    <UserContextProvider>
      <div className={`${lexandDeca.className} antialiased`}>
        <Header />
        <div className="min-h-[80vh] h-max padding">{children}</div>
        <Footer />
      </div>
    </UserContextProvider>
  );
}
