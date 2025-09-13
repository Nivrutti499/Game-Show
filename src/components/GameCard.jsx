import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { fetchDetails } from "../store/features/detailSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resizeImg } from "../util";
const GameCard = ({ game ,path}) => {
  const dispatch = useDispatch();

  const { name, background_image, rating, released, id } = game;
  return (
    <PopularCardDiv
      layoutId={id.toString()}
      onClick={() => loadGameDetailHandler(dispatch, id)}
    >
      <Link to={`${path}${id}`}>
        <img src={resizeImg(background_image, 640)} alt={name} />
        <div className="header-div">
          <TextDiv>
            <h3>{name}</h3>
            {rating !== 0 ? (
              <div className="star-rating">
                <AiFillStar className="icon" />
                {rating}
              </div>
            ) : (
              ""
            )}
          </TextDiv>
          <p className="released-date">{released}</p>
        </div>
      </Link>
    </PopularCardDiv>
  );
};

const PopularCardDiv = styled(motion.div)`
  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    background-size: cover;
  }
  min-height: 30vh;
  background-color: #25262e;
  .header-div {
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    .released-date {
      margin-top: 8px;
      color: #696b7d;
    }
  }

  .star-rating {
    display: flex;
    align-items: center;
    color: #696b7d;
    .icon {
      margin-right: 4px;
    }
  }
`;
const TextDiv = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;

export default GameCard;

export const loadGameDetailHandler = async (dispatch, id) => {
  await dispatch(fetchDetails(id));
  return null;
};
