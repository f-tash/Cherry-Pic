import { Box, Button, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { set, z } from "zod";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingOverlay from "../Overlay.tsx";

type GeneratePictureModalProps = {
  dreamTitle: string;
  value: string;
  setError: (msg: string) => void;
};

const GeneratePictureModal: React.FC<GeneratePictureModalProps> = ({
  value,
  setError,
  dreamTitle,
}) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [dreamId, setDreamId] = useState<number | null>(null);
  const endpoint = "https://cherry-pic.onrender.com/dreams"; // APIのエンドポイント
  const [loading, setLoading] = useState(false); // ローディング状態管理
  const schema = z
    .string()
    .min(1, "夢は1文字以上入力してください")
    .max(60, "夢は最大60文字までです");

  const handlePost = async () => {
    //バリデーションチェック
    const result = schema.safeParse(value);
    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError(""); // エラーなし
      try {
        setLoading(true); // ローディング開始
        //MEMO:他人の夢を取得
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dream_title: value,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status}`);
        }

        const result = await response.json();
        console.log("成功:", result);
        setUrl(result.response.url); //urlを取得
        setDreamId(result.response.dream_id); //idを取得
        setOpen(true);
      } catch (error) {
        console.error("エラー:", error);
      } finally {
        setLoading(false); // ローディング終了
      }
    }
  };
  const handleUpdate = async () => {
    console.log("dreamId:", dreamId);
    const response = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dream_id: dreamId,
        submit: true,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("部分更新成功:", result);
      navigate("/photo-list");
    } else {
      console.error("更新失敗:", response.status);
      const errorDetails = await response.json(); // 詳細なエラーメッセージを確認
      console.error("エラー詳細:", errorDetails);
    }
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <Box>
      {loading ? (
        <Typography>画像を生成しています...</Typography>
      ) : (
        <>
          <Button
            onClick={handlePost}
            variant="contained"
            sx={{
              bgcolor: "#FF75B6",
              color: "white",
              paddingX: 5,
              borderRadius: 15,
              marginTop: 5,
            }}
          >
            画像を生成する
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              borderRadius={3}
              position="absolute"
              top="50%"
              left="50%"
              margin={"auto"}
              width={{ xs: "85%", md: 400 }}
              maxWidth={400}
              bgcolor="background.paper"
              boxShadow={24}
              py={7}
              sx={{ transform: "translate(-50%, -50%)" }}
            >
              <Button
                onClick={handleClose}
                disableRipple
                sx={{
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  padding: "0",
                  minWidth: "0",
                  position: "absolute",
                  top: -20,
                  left: -20,
                  zIndex: 2,
                  bgcolor: "#FF75B6",
                }}
              >
                <CloseIcon sx={{ color: "white" }}></CloseIcon>
              </Button>
              <Typography>画像が生成されました！</Typography>
              <img
                src={url}
                alt="生成された画像"
                style={{ marginTop: 30, borderRadius: 10 }}
                width={250}
                height={250}
              />
              <Typography sx={{ mt: 5, mx: 10 }}>
                あなたの夢：{dreamTitle}
              </Typography>
              <Button
                variant="contained"
                onClick={handleUpdate}
                sx={{
                  bgcolor: "#FF75B6",
                  color: "white",
                  paddingX: 5,
                  borderRadius: 15,
                  marginTop: 5,
                }}
              >
                投稿する
              </Button>
            </Box>
          </Modal>
        </>
      )}
      {loading && <LoadingOverlay />}
    </Box>
  );
};

export default GeneratePictureModal;
