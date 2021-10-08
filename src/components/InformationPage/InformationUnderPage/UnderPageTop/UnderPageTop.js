import "./UnderPageTop.css";
import player_i_m_a_g_e from "../../../../Images/player.png";
import pan_i_m_a_g_e from "../../../../Images/Vector (10).png";
import garbage_i_m_a_g_e from "../../../../Images/Vector (11).png";
import file_i_m_a_g_e from "../../../../Images/icon-file.png";

const UnderPageTop = () => {
    return (
        <div className="under-page-top">
            <div className="nkar-icons">
                <div className="image-book">
                    <img src={player_i_m_a_g_e}></img>
                </div>
                <div className="phone-icons">
                    <img className="icon-pan" src={pan_i_m_a_g_e}></img>
                    <img className="icon-garbage" src={garbage_i_m_a_g_e}></img>
                </div>
            </div>
            <div className="image-book-ooo">
                <img src={player_i_m_a_g_e}></img>
            </div>
            <div className="data-image-book">
                <div className="icons">
                    <img className="icon-pan" src={pan_i_m_a_g_e}></img>
                    <img className="icon-garbage" src={garbage_i_m_a_g_e}></img>
                </div>
                <h3 className="veb">Վեբ Դիզայնի Դասընթաց․ Կայքերի Տեսակները</h3>
                <div className="row"></div>
                <div className="button-files">
                    <h5 >Լրացուցիչ ֆայլեր</h5>
                    <button>ջնջել</button>
                </div>
                <div className="file-text">
                    <img src={file_i_m_a_g_e}></img>
                    <h5 >Դասի նյութեր․rar</h5>
                </div>
                <h1 className="amis">20․06․2021</h1>
            </div>
       </div>
    )
}

export default UnderPageTop;