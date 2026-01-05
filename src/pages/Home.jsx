import Hero from "../components/home/Hero";
import FeaturedItems from "../components/home/FeaturedItems";
import CategoryGrid from "../components/home/CategoryGrid";

const Home = () => {
    return (
        <main>
            <Hero />
            <FeaturedItems />
            <CategoryGrid />
        </main>
    );
};

export default Home;