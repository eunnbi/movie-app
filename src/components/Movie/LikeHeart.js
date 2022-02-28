import { FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";

const LikeButton = styled.button`
    color: #A20100;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
    height: 21px;
    background-color: transparent;
    font-weight: bold;
    z-index: 1;
`;


function LikeHeart({ like, onLike }){
    return (
        <LikeButton onClick={onLike}>
            {like ? <FaHeart/> : <FaRegHeart/>}
        </LikeButton>
    );
}

export default LikeHeart;