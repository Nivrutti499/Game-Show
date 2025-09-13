import styled from "styled-components";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import Detail from "../components/Detail";
import { useEffect } from "react";
const Search = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const isLoading = useSelector((state) => state.search.isLoading);
  const searchFor = useSelector((state) => state.search.searchFor);
  const searchResult = useSelector((state) => state.search.data);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchFor === "") navigate("/");
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SearchDiv>
          {pathId && <Detail pathId={pathId} />}
          <div className="control-div">
            <button onClick={() => navigate("/")}>
              <FaArrowLeft />
            </button>
          </div>
          <h2>Serach for "{searchFor}"</h2>
          <SearchCardGrid>
            {searchResult.map((game) => (
              <GameCard game={game} path={"/search/"} />
            ))}
          </SearchCardGrid>
        </SearchDiv>
      )}
    </>
  );
};

export default Search;

const SearchDiv = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  h2 {
    padding: 24px 0;
  }
  .control-div {
    padding: 16px 0;
    width: 100%;
    border-bottom: 1.5px solid #3d3e64;
    button {
      font-size: 1rem;
      background: none;
      border: none;
      color: #898a94;
      cursor: pointer;
    }
  }
`;
const SearchCardGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 6rem;
`;
