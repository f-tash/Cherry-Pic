import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type GeneratePictureModalProps = {
  dreamTitle: string;
};

const GeneratePictureModal: React.FC<GeneratePictureModalProps> = ({
  dreamTitle,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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
          width={400}
          bgcolor="background.paper"
          boxShadow={24}
          py={7}
          sx={{ transform: "translate(-50%, -50%)" }}
        >
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
