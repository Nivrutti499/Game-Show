import styled from "styled-components";

import { motion } from "framer-motion";
const Loading = () => {
	return (
		<LoaderDiv>
			<h4>Loading...</h4>
		</LoaderDiv>
	);
};

export default Loading;

const LoaderDiv = styled(motion.div)`
	z-index: 6;
	position: absolute;
	z-index: 5;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgb(16, 18, 22, 0.8);
	text-align: center;
	h4 {
		padding: 50vh 0;
	}
`;
