import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftContainer from "./layouts/LeftContainer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-wrap items-center justify-center flex-grow px-10 bg-gray-100 md:flex-nowrap">
        <LeftContainer />
        {/* <Visualiastion /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
