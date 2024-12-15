/* eslint-disable react/prop-types */
import Container from "../../../components/Container";

const SeriesDetailStatus = ({ series }) => {
  return (
    <Container>
      <h2 className="text-lg font-semibold mt-4">Status</h2>
      <p className="text-gray-800">{series?.status}</p>
      <h2 className="text-lg font-semibold mt-2">Oringinal Language</h2>
      <p className="text-gray-800">{series?.original_language}</p>
      <h2 className="text-lg font-semibold mt-2">Popularity</h2>
      <p className="text-gray-800">{series?.popularity}</p>
    </Container>
  );
};

export default SeriesDetailStatus;
