import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/Breadcrumb";

const AboutPage = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle={"About Us"} />{" "}
      <div className=" min-h-screen py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg text-center mb-8">
            Welcome to <span className="font-semibold">TheMovies</span>, your
            ultimate destination for all things movies!
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Who We Are</h2>
            <p>
              We are a team of movie buffs and tech enthusiasts dedicated to
              creating a platform that celebrates the magic of films. From
              Hollywood blockbusters to indie gems, action-packed thrillers to
              heartwarming dramas, our website is designed to cater to every
              taste and preference.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
            <ul className="list-disc pl-5">
              <li>
                Movie Recommendations: Discover the best films tailored to your
                interests, curated by our experts.
              </li>
              <li>
                Latest Releases: Stay updated on the newest movies hitting
                theaters and streaming platforms.
              </li>
              <li>
                Trending News: Keep up with the latest buzz, industry updates,
                and movie news.
              </li>
              <li>
                Top Lists: Browse through our carefully curated lists of
                must-watch movies across genres.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p>
              We aim to create a space where movie enthusiasts can explore,
              learn, and share their love for cinema. We believe movies are more
              than entertainment—they are stories that inspire, teach, and
              connect us.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-3">Let’s Connect</h2>
            <p>
              Have questions, suggestions, or feedback? We’d love to hear from
              you! Connect with us on our social media channels or drop us a
              message through our{" "}
              <Link to="/contact-us" className="text-white underline font-bold">
                Contact Page
              </Link>
              .
            </p>
          </section>

          <p className="text-center mt-10 text-lg">
            At <span className="font-semibold">TheMovies</span>, every movie has
            a story, and every visitor is part of ours.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
