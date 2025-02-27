import React from "react";
import { PhotoInfo } from "./Photo-list-type"; // 写真情報の型定義をインポート

// 写真情報を受け取って表示するコンポーネント
const PhotoCard: React.FC<PhotoInfo> = (props) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={props.url} alt={props.dream_title} style={{ width: "250px", height: "250px", marginTop: "5px", borderRadius: "5%", backgroundColor: "blue" }}></img>
                <div style={{ display: 'flex', flexDirection: 'row', gap: "0.3em", maxWidth: "230px" }}>
                    <img src="./sakura.png" alt="Cherry-Blossum" style={{ height: "32px", width: "auto", marginTop: "0.7em" }} />
                    <p style={{ alignSelf: 'flex-start', textAlign: 'left' }}>{props.dream_title}</p>
                </div>
            </div >
        </>
    );
};

export default PhotoCard;