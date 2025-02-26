import React, { useState, useEffect } from "react";
import { Container, Box, Grid2 } from "@mui/material";

// 写真情報の型定義
type PhotoInfo = {
    id: number; // 画像のID
    title: string; // 画像のタイトル
    url: string; // 画像のURL
};

const PhotoList: React.FC = () => {
    const [photosInfo, setPhotosInfo] = useState<PhotoInfo[]>([]); // 写真情報

    // 初回レンダリング時のみ実行
    useEffect(() => {
        setPhotosInfo([
            { id: 1, title: "photo1", url: "https://via.placeholder.com/150" },
            { id: 2, title: "photo2", url: "https://via.placeholder.com/150" },
            { id: 3, title: "photo3", url: "https://via.placeholder.com/150" },
            { id: 4, title: "photo4", url: "https://via.placeholder.com/150" },
            { id: 5, title: "photo5", url: "https://via.placeholder.com/150" },
        ]); // 仮の写真情報をセット

    }, []);

    return (
        <>
            <Box>
                <Container sx={{ alignItems: "center" }}>
                    <Grid2 container spacing={3} >
                        {
                            photosInfo.map((photo) => (
                                <Grid2 key={photo.id} size={3}>
                                    <PhotoCard {...photo} />
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Container>
            </Box>
        </>
    );
};

// 写真情報を受け取って表示するコンポーネント
const PhotoCard: React.FC<PhotoInfo> = (props) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={props.url} alt={props.title}></img>
                <p>{props.title}</p>
            </div>
        </>
    );
};

export default PhotoList;