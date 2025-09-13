import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResult } from "../store/features/searchSlice";
import { slideRight } from "../animation";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSerachInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <NavbarDiv>
      {!isOpen ? <h3>GameShow</h3> : ""}
      <SearchDiv>
        <input
          value={searchInput}
          onChange={(e) => setSerachInput(e.target.value)}
          placeholder="eg. Cyberpunk"
        />
        <Link to="/search">
          <button
            onClick={() => {
              searchInput ? dispatch(fetchSearchResult(searchInput)) : "";
            }}
          >
            Search
          </button>
        </Link>
      </SearchDiv>
      <SearchMobileDiv isOpen={isOpen}>
        {isOpen ? (
          <motion.input
            variants={slideRight}
            initial="hidden"
            animate="show"
            value={searchInput}
            onChange={(e) => setSerachInput(e.target.value)}
            placeholder="eg. Cyberpunk"
          />
        ) : (
          ""
        )}
        <button
          onClick={() => {
            if (isOpen && searchInput) {
              dispatch(fetchSearchResult(searchInput));
              navigate("/search");
            } else setIsOpen(!isOpen);
          }}
        >
          Search
        </button>
      </SearchMobileDiv>
    </NavbarDiv>
  );
};

export default Navbar;

const NavbarDiv = styled(motion.div)`
  width: 100vw;
  padding: 24px 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #25262e;
  h3 {
    font-size: 24px;
  }

  @media (max-width: 450px) {
    h3 {
      font-size: 16px;
    }
  }
`;

const SearchMobileDiv = styled(motion.div)`
  display: none;
  width: 100%;
  button {
    outline: none;
    border: none;
    text-align: center;
    text-decoration: none;
    background: #101216;
    color: #898a94;
    cursor: pointer;
  }

  input {
    width: 80%;
    padding: 16px 3rem 16px 1rem;
    outline: none;
    border: none;
    text-decoration: none;
    background: #32333e;
    color: #dedfe3;
  }

  @media (max-width: 450px) {
    display: flex;

    button {
      margin-left: ${(props) => (props.isOpen ? 0 : "auto")};
      padding: ${(props) => (props.isOpen ? "auto 0" : "8px")};
      width: 20%;
    }
  }
`;

const SearchDiv = styled(motion.div)`
  @media (max-width: 450px) {
    display: none;
  }
  display: flex;

  input {
    padding: 16px 3rem 16px 1rem;
    outline: none;
    border: none;
    text-decoration: none;
    background: #32333e;
    color: #dedfe3;
  }

  button {
    padding: 0 24px;
    outline: none;
    border: none;
    height: 100%;
    text-decoration: none;
    background: #101216;
    color: #898a94;
    cursor: pointer;
  }
`;
