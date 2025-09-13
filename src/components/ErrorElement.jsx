import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <ErrorDiv>
      <h1>Error Occur</h1>
      <p>
        You can go to{" "}
        <Link className="homepage-link" to="/">
          homepage
        </Link>{" "}
        and try again..
      </p>
    </ErrorDiv>
  );
};

export default ErrorElement;

const ErrorDiv = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  padding: auto;
  text-align: center;
  background: #101216;
  .homepage-link {
    text-decoration: none;
    color: white;
    &:hover {
      font-weight: bold;
    }
  }
  p {
    color: #738496;
  }
  i {
    text-decoration: none;
    color: white;
  }
`;
