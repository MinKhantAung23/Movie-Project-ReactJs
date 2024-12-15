/* eslint-disable react/prop-types */

import Container from "../../../components/Container";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SeriesDetailRecommendations = ({ recommendations }) => {
  const navigate = useNavigate();
  const handleNavigate = (series) => {
    navigate(`/series/${series.id}`);
  };

  return (
    <Container>
      <div className="w-full select-none my-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Recommendations
        </h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {recommendations?.results?.map((series) => (
            <SwiperSlide key={series.id}>
              <div
                className="h-72 overflow-hidden flex flex-col bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg text-white"
                onClick={() => handleNavigate(series)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
                  alt={series.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold text-center mt-2 px-2">
                  {series.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default SeriesDetailRecommendations;
