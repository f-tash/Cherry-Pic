import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Grid2, Button } from "@mui/material";


import PhotDialog from "./Photo-dialog.tsx"; // ダイアログのコンポーネントをインポート
import { PhotoInfo } from "./Photo-list-type"; // 写真情報の型定義をインポート
import { PhotoDialogProps } from "./Photo-list-type"; // ダイアログのプロップスの型定義をインポート

const PhotoList: React.FC = () => {
    const [photosInfoList, setPhotosInfoList] = useState<PhotoInfo[]>([]); // 写真情報
    const [isDialog, setIsDialog] = useState<boolean>(false); // ダイアログの表示状態

    // ダイアログの表示状態を変更
    const closeDialog = () => {
        setIsDialog(false);
    }

    // ダイアログのプロップス
    const [dialogProps, setDialogProps] = useState<PhotoDialogProps>({
        id: 0,
        title: "",
        url: "",
        closeDialog: closeDialog,
        isDialog: isDialog
    });

    // 初回レンダリング時のみ実行
    useEffect(() => {
        setPhotosInfoList([
            { id: 1, title: "大富豪になる", url: "https://via.placeholder.com/150" },
            { id: 2, title: "野球選手になりたい", url: "https://via.placeholder.com/150" },
            { id: 3, title: "仮面ライダーになる", url: "https://via.placeholder.com/150" },
            { id: 4, title: "世界一周旅行クルーズ", url: "https://via.placeholder.com/150" },
            { id: 5, title: "photo5", url: "https://via.placeholder.com/150" },
        ]); // 仮の写真情報をセット


    }, []);

    // 詳細情報のダイアログを開く
    const handleOpenDialog = (photoInfo: PhotoInfo) => {
        setDialogProps({
            id: photoInfo.id,
            title: photoInfo.title,
            url: photoInfo.url,
            closeDialog: closeDialog,
            isDialog: true
        });
        setIsDialog(true);
    };



    return (
        <>
            <Box>
                <Container sx={{ mt: "5px" }}>
                    <h1>
                        Cherry-Pic
                    </h1>
                    <Grid2 container spacing={3} >
                        {
                            // 写真情報を元に写真カードを繰り返しで生成
                            photosInfoList.map((photo) => (
                                <Grid2 key={photo.id} size={3} sx={{ textAlign: "center", bgcolor: "", marginTop: "10px" }}>
                                    <div onClick={() => handleOpenDialog(photo)}>
                                        <PhotoCard {...photo} />
                                    </div>
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Container>
                <PostLinkButton />
                <PhotDialog {...dialogProps} isDialog={isDialog}></PhotDialog>
            </Box>
        </>
    );
};

// 写真情報を受け取って表示するコンポーネント
const PhotoCard: React.FC<PhotoInfo> = (props) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={props.url} alt={props.title} style={{ width: "250px", height: "250px", marginTop: "5px", borderRadius: "5%", backgroundColor: "blue" }}></img>
                <p>{props.title}</p>
            </div>
        </>
    );
};

// 投稿ページへのリンクボタン
const PostLinkButton: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <>
            <Button onClick={handleClick} sx={{
                textAlign: "center", position: "fixed", bottom: "50px", right: "50px", borderRadius: "50%", backgroundColor: "#FF75B6", color: "white",
                width: "56px", height: "56px", opacity: 0.5, "&:hover": { opacity: 1 }
            }}>
                ＋
            </Button>
        </>
    );
}

export default PhotoList;