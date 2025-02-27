import { Box, Button, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { z } from "zod";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const [open, setOpen] = React.useState(false);
  const schema = z
    .string()
    .min(1, "夢は1文字以上入力してください")
    .max(60, "夢は最大60文字までです");

  const handleOpen = () => {
    const result = schema.safeParse(value);
    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError(""); // エラーなし
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={handleOpen}
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
            src="./ai-picture.png"
            alt="仮の画像"
            style={{ marginTop: 30 }}
          />
          <Typography sx={{ mt: 5, mx: 10 }}>
            あなたの夢：{dreamTitle}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/photo-list")}
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
    </Box>
  );
};

export default GeneratePictureModal;
