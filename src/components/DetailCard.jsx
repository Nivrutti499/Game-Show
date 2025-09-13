import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { resizeImg } from "../util";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//icons
import { FaArrowLeft } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { AiFillApple } from "react-icons/ai";

const DetailCard = ({ details, screens, pathId }) => {
  const getPlatformIcon = (name) => {
    switch (name) {
      case "PC":
        return <GrPersonalComputer />;
      case "macOS":
        return <AiFillApple />;

      default:
        return <GrPersonalComputer />;
    }
  };
  const navigate = useNavigate();
  return (
    <DetailShadow
      onClick={(e) => {
        e.stopPropagation();
        navigate("");
      }}
    >
      <DetailCardDiv
        layoutId={pathId}
        layout
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <DetailHeader>
          <button onClick={() => navigate("")}>
            <FaArrowLeft />
          </button>
          <img src={details.background_image} alt="" className="header-img" />
        </DetailHeader>
        <Header>
          <h2>{details.name}</h2>
          <h4>{details.released}</h4>
        </Header>
        <DescGrid>
          <p>{parse(String(details.description))}</p>
          <span className="divider"></span>
          <div>
            {details.platforms.forEach((platform) => {
              return (
                <>
                  <div key={platform.id} className="Platform">
                    {getPlatformIcon(platform.name)}
                    {platform.name}
                  </div>
                </>
              );
            })}
          </div>
        </DescGrid>
        <Screens>
          {screens.map((screen) => {
            return (
              <img
                src={resizeImg(screen.image, 1280)}
                key={screen.id}
                alt={screen.image}
              />
            );
          })}
        </Screens>
      </DetailCardDiv>
    </DetailShadow>
  );
};

export default DetailCard;

const DetailShadow = styled(motion.div)`
  cursor: ponter;
  z-index: 5;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #101216;
  }
  &::-webkit-scrollbar-track {
    background-color: #25262e;
  }
`;

const DetailCardDiv = styled(motion.div)`
  position: relative;
  width: 70%;
  margin: 0 auto;
  background-color: #25262e;
  img {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;

const DetailHeader = styled(motion.div)`
  button {
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(0, 3, 17, 0.5);
    border: none;
    color: #fffff0;
    padding: 8px;
    margin: 8px 8px;
    cursor: pointer;
  }
`;

const Screens = styled(motion.div)`
  margin: 0 24px;
  img {
    margin: 16px 0;
  }
`;

const Header = styled(motion.div)`
  padding: 32px 24px 32px 24px;
  h4 {
    color: #dedfe3;
  }
  background: #101216;
`;
const DescGrid = styled(motion.div)`
  p {
    font-size: 12px;
    line-height: 20px;
    color: #c7d1db;

    ul,
    li {
      text-decoration: none;
    }
  }

  margin: 32px 24px;
  display: flex;
  flex-direction: column;
  span {
    width: 1.5px;
    background: #ffffff;
    height: 100%;
  }
`;
