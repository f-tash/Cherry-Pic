import React from "react";
import { PhotoInfo } from "./Photo-list-type"; // 写真情報の型定義をインポート

// 写真情報を受け取って表示するコンポーネント
const PhotoCard: React.FC<PhotoInfo> = (props) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={props.url} alt={props.dream_title} style={{ width: "250px", height: "250px", marginTop: "5px", borderRadius: "5%", backgroundColor: "blue" }}></img>
                <p>{props.dream_title}</p>
            </div>
        </>
    );
};

export default PhotoCard;