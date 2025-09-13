// styles
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../animation";
//store
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// components
import UpcomingCard from "../components/UpcomingCard";
import GameCard from "../components/GameCard";
import Detail from "../components/Detail";
import Loading from "../components/Loading";

// Carousal
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const isLoading = useSelector((state) => state.games.isLoading);
  const upcomingGames = useSelector((state) => state.games.upcoming);
  const populargames = useSelector((state) => state.games.popular);
  const newGames = useSelector((state) => state.games.new);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <HomeComponent
          pathId={pathId}
          upcomingGames={upcomingGames}
          populargames={populargames}
          newGames={newGames}
        />
      )}
    </>
  );
};

export default Home;

const HomeComponent = ({ pathId, upcomingGames, populargames, newGames }) => {
  return (
    <motion.div layout variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence>{pathId && <Detail pathId={pathId} />}</AnimatePresence>
      <UpcomingGames
        onClick={(e) => {
          if (!pathId) {
            e.stopPropagation();
          }
        }}
      >
        <h2>Upcoming Game</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          autoFocus={true}
          showStatus={false}
        >
          {upcomingGames.map((game) => {
            return <UpcomingCard game={game} />;
          })}
        </Carousel>
      </UpcomingGames>
      <Games>
        <h2>Popular Games</h2>
        <GamesGrid>
          {populargames.map((game) => {
            return <GameCard path={"/game/"} game={game} />;
          })}
        </GamesGrid>
      </Games>
      <Games>
        {/* <h2>New Games Games</h2>
				<GamesGrid>
					{newGames.map((game) => {
						return <GameCard game={game} />;
					})}
				</GamesGrid> */}
      </Games>
    </motion.div>
  );
};

const UpcomingGames = styled(motion.div)`
  width: 80%;
  min-width: 300px;
  margin: 64px auto;
  height: auto;
`;

const Games = styled(motion.div)`
  max-width: 80%;
  margin: 64px auto;
`;

const GamesGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 6rem;
`;
