import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-wrap items-center justify-center flex-grow px-10 bg-gray-100 md:flex-nowrap">
        {/* <LeftSide /> */}
        {/* <Visualiastion /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
