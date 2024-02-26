import Header from "./componets/Header";
import { ProductionHouse } from "./componets/Production";
import { Slider } from "./componets/Slider";
import GenreMovieList from "./componets/GenreMovieList";

function App(){
  return (
    <>
    <Header />
    <Slider />
    <ProductionHouse />
    <GenreMovieList />
    </>
  )
}

export default App