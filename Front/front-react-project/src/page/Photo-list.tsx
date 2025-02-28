import React, { useState, useEffect } from "react";
import { Container, Box, Grid2, useMediaQuery } from "@mui/material"; // マテリアルUIのコンポーネントをインポート

import PhotDialog from "../photo-list/modal/Photo-dialog.tsx"; // ダイアログのコンポーネントをインポート
import PhotoCard from "../photo-list/PhotoCard.tsx"; // 写真カードのコンポーネントをインポート
import PostLinkButton from "../photo-list/PostLinkButton.tsx"; // 投稿ページへのリンクボタンのコンポーネントをインポート

import { PhotoInfo, PhotoDialogProps } from "../photo-list/Photo-list-type"; // 写真情報とダイアログのプロップスの型定義をインポート
import { useNavigate } from "react-router-dom"; // ルーティングのフックをインポート
const PhotoList: React.FC = () => {
  const navigate = useNavigate();
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
    const requestPhotoLimit = isMobile ? 12 : 20;

    // APIから写真情報のリストを取得
    const getPhotos = async () => {
      try {
        const params = new URLSearchParams({
          limit: requestPhotoLimit.toString(),
        }).toString();

        const response = await fetch(`${endpoint}?${params}`, {
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
  }, [isMobile]);

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
        <Box
          component="h1"
          sx={{
            ml: { xs: 2, md: "50px" },
            mb: { xs: 0, md: "30px" },
            fontFamily: "'Pacifico', cursive",
            textShadow: "2px 2px 4px #ffffff",
            color: "Black",
            fontSize: { md: "42px" },
            textAlign: "left",
            cursor: "pointer",
          }}
          onClick={() => {navigate("/");}}
        >
          Cherry Pic
        </Box>
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
