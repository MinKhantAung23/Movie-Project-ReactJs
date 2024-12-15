/* eslint-disable react/prop-types */
import Container from "../../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SeriesDetailCasts = ({ cast }) => {
  return (
    <Container>
      <div className="w-full select-none">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Casts
        </h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          className="relative"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {cast?.cast?.map((actor) => (
            <SwiperSlide key={actor.id}>
              <div className="h-64 flex flex-col items-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg text-white">
                <img
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                      : "https://via.placeholder.com/128x128?text=No+Image"
                  }
                  alt={actor.name}
                />
                <h3 className="text-lg font-semibold mt-3 text-center truncate">
                  {actor.name}
                </h3>
                <p className="text-sm text-gray-200 text-center ">
                  {actor.character}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default SeriesDetailCasts;
