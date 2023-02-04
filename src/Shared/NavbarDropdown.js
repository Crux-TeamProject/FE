import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const NavbarDropdown = ({setShowMypage, userId, removeToken}) => {

const closeModal = () => {
    setShowMypage(false)
}
const navigate = useNavigate()

    return (
            <ModalBox onClick={closeModal}>
                <Content onClick={()=>{navigate(`/members/${userId}`)}}>MYPAGE</Content>
                <Content onClick={removeToken}>LOGOUT</Content>
            </ModalBox>
    )
}

const ModalBox = styled.div`
width: 11rem;
height: 10rem;
box-shadow: 0px 80px 80px rgba(0, 0, 0, 0.25);
border-radius: 15px;
position: absolute;
top: 16rem;
margin-left: 4.3rem;
background: #262626;
color: #cccccc;
overflow: auto;
z-index: 901;
font-size: 1.2rem;
text-align: center;
padding: 1rem 0 0 0;
`

const Content = styled.div`
width: 9rem;
height: 3.5rem;
margin: 2px auto 6px auto;
border-radius: 0.5rem;
background-color: #333333;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

export default NavbarDropdown;