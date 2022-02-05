import React, {useState} from 'react';
import img from './../img/userProfile.png'
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import './../components/PegesStyles/Profile.css'
import Modal from "../components/ModalWin/Modal";



const Profile = () => {

    const user = useSelector(state => state.user)
    const [modalActive, setActive] = useState(false)

    return (
        <div>
            <Container>
                <div className="d-flex mt-5 justify-content-evenly">
                    <div className="profile-userImg">
                        <img src={img} alt="profile" width="100px" height="100px" style={{borderRadius: '50px'}}/>
                    </div>
                    <div className="about-user">
                        <div className="about-userName">
                            Ваше имя: <i>{user.login}</i>
                        </div>
                        <div className="about-userCash">
                            Ваш баланс: <i>{user.cash}</i>
                        </div>
                        <div className="about-btn-addCash mt-2">
                            <button onClick={() => setActive(true)}>Изменить баланс</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Modal active = {modalActive} setActive = {setActive}/>
        </div>

    );
};

export default Profile;