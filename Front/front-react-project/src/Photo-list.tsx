import React, { useState, useEffect } from "react";

import { Container, Box, Grid2 } from "@mui/material"; // マテリアルUIのコンポーネントをインポート

import PhotDialog from "./Photo-dialog.tsx"; // ダイアログのコンポーネントをインポート
import PhotoCard from "./PhotoCard.tsx"; // 写真カードのコンポーネントをインポート
import PostLinkButton from "./PostLinkButton.tsx"; // 投稿ページへのリンクボタンのコンポーネントをインポート

import { PhotoInfo } from "./Photo-list-type"; // 写真情報の型定義をインポート
import { PhotoDialogProps } from "./Photo-list-type"; // ダイアログのプロップスの型定義をインポート

const PhotoList: React.FC = () => {
    const [photosInfoList, setPhotosInfoList] = useState<PhotoInfo[]>([]); // 写真情報
    const [isDialog, setIsDialog] = useState<boolean>(false); // ダイアログの表示状態

    const endpoint = "http://localhost:4010/dreams"; // APIのエンドポイント

    // ダイアログの表示状態を変更
    const closeDialog = () => {
        setIsDialog(false);
    }

    // ダイアログのプロップス
    const [dialogProps, setDialogProps] = useState<PhotoDialogProps>({
        dream_id: -1,
        dream_title: "",
        url: "",
        closeDialog: closeDialog,
        isDialog: isDialog
    });

    // 初回レンダリング時のみ実行
    useEffect(() => {
        setPhotosInfoList([
            { dream_id: 1, dream_title: "大富豪になる", url: "https://via.placeholder.com/150" },
            { dream_id: 2, dream_title: "野球選手になりたい", url: "https://via.placeholder.com/150" },
            { dream_id: 3, dream_title: "仮面ライダーになる", url: "https://via.placeholder.com/150" },
            { dream_id: 4, dream_title: "世界一周旅行クルーズ", url: "https://via.placeholder.com/150" },
            { dream_id: 5, dream_title: "photo5", url: "https://via.placeholder.com/150" },
        ]); // 仮の写真情報をセット

        // APIから写真情報のリストを取得
        const getPhotos = async () => {
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setPhotosInfoList((prevPhotosInfoList) => [...prevPhotosInfoList, ...data]);
            } catch (e) {
                alert("写真情報の取得に失敗しました" + e);
            }
        };

        getPhotos();
    }, []);

    // 詳細情報のダイアログを開く
    const handleOpenDialog = (photoInfo: PhotoInfo) => {
        setDialogProps({
            dream_id: photoInfo.dream_id,
            dream_title: photoInfo.dream_title,
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
                                <Grid2 key={photo.dream_id} size={3} sx={{ textAlign: "center", bgcolor: "", marginTop: "10px" }}>
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





export default PhotoList;