import HeroSection from "../components/HeroSection";
import Container from "../../../components/Container";
import ShowMovies from "../components/ShowMovies";
import ShowSeries from "../components/ShowSeries";

const HomePage = () => {
  return (
    <Container className={"mb-4"}>
      <HeroSection />
      <ShowMovies />
      <ShowSeries />
    </Container>
  );
};

export default HomePage;
