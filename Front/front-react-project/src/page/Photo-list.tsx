import React, { useState, useEffect } from "react";
import "../style.css"; // スタイルシートをインポート
import {
  Container,
  Box,
  Grid2,
  useMediaQuery,
  Typography,
} from "@mui/material"; // マテリアルUIのコンポーネントをインポート

import PhotDialog from "../photo-list/modal/Photo-dialog.tsx"; // ダイアログのコンポーネントをインポート
import PhotoCard from "../photo-list/PhotoCard.tsx"; // 写真カードのコンポーネントをインポート
import PostLinkButton from "../photo-list/PostLinkButton.tsx"; // 投稿ページへのリンクボタンのコンポーネントをインポート

import { PhotoInfo, PhotoDialogProps } from "../photo-list/Photo-list-type"; // 写真情報とダイアログのプロップスの型定義をインポート

const PhotoList: React.FC = () => {
  const [photosInfoList, setPhotosInfoList] = useState<PhotoInfo[]>([]); // 写真情報
  const [isDialog, setIsDialog] = useState<boolean>(false); // ダイアログの表示状態
  const isMobile = useMediaQuery("(max-width:850px)");

  const endpoint = "https://cherry-pic.onrender.com/dreams";

  // ダイアログの表示状態を変更
  const closeDialog = () => {
    setIsDialog(false);
  };

  // ダイアログのプロップス
  const [dialogProps, setDialogProps] = useState<PhotoDialogProps>({
    dream_id: -1,
    dream_title: "",
    url: "",
    closeDialog: closeDialog,
    isDialog: isDialog,
  });

  // 初回レンダリング時に写真情報を取得
  useEffect(() => {
    // APIから写真情報のリストを取得
    const getPhotos = async () => {
      try {
        const response = await fetch(endpoint, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });
        const data = await response.json();
        setPhotosInfoList((prevPhotosInfoList) => [
          ...prevPhotosInfoList,
          ...data,
        ]);
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
      isDialog: true,
    });
    setIsDialog(true);
  };

  return (
    <>
      <Box>
        <Typography
          component="h1"
          fontSize={40}
          sx={{
            ml: isMobile ? "0" : "50px",
            mb: isMobile ? "0" : "30px",
            textAlign: isMobile ? "center" : "left",
            fontFamily: "Noto Serif JP, serif",
            fontOpticalSizing: "auto",
            fontWeight: "normal",
            fontStyle: "normal",
          }}
        >
          Cherry-Pic
        </Typography>
        <Container sx={{ mt: "5px" }}>
          <Grid2 container spacing={3}>
            {
              // 写真情報を元に写真カードを繰り返しで生成
              photosInfoList.map((photo) => (
                <Grid2
                  key={photo.dream_id}
                  size={isMobile ? 4 : 3}
                  sx={{ textAlign: "center", bgcolor: "", marginTop: "10px" }}
                >
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
