import React from "react";
import { PhotoInfo } from "./Photo-list-type"; // 写真情報の型定義をインポート
import { Box, useMediaQuery } from "@mui/material";

// 写真情報を受け取って表示するコンポーネント
const PhotoCard: React.FC<PhotoInfo> = (props) => {
    const isMobile = useMediaQuery("(max-width:1100px)");
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: isMobile ? "100%" : "250px", height: isMobile ? "auto" : "250px", marginTop: "5px", borderRadius: "5%" }}>
                    <img src={props.url} alt={props.dream_title} style={{ width: "100%", height: "100%", borderRadius: "5%" }} />
                </Box>
                <div style={{ display: 'flex', flexDirection: 'row', gap: "0.3em", maxWidth: "230px" }}>
                    <img src="./sakura.png" alt="Cherry-Blossum" style={{ height: "32px", width: "auto", marginTop: "0.7em" }} />
                    <p style={{ alignSelf: 'flex-start', textAlign: 'left' }}>{props.dream_title}</p>
                </div>
            </div >
        </>
    );
};

export default PhotoCard;