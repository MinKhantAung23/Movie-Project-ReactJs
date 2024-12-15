/* eslint-disable react/prop-types */

import Container from "../../../components/Container";

const MovieDetailStatus = ({ movie }) => {
  return (
    <Container>
      <h2 className="text-lg font-semibold mt-4">Status</h2>
      <p className="text-gray-800">{movie?.status}</p>
      <h2 className="text-lg font-semibold mt-2">Oringinal Language</h2>
      <p className="text-gray-800">{movie?.original_language}</p>
      <h2 className="text-lg font-semibold mt-2">Budget</h2>
      <p className="text-gray-800">${movie?.budget}</p>
      <h2 className="text-lg font-semibold mt-2">Revenue</h2>
      <p className="text-gray-800">${movie?.revenue}</p>
    </Container>
  );
};

export default MovieDetailStatus;
