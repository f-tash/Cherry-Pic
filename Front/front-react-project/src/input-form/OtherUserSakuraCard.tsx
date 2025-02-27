import { Box, Typography } from "@mui/material";
import React from "react";
import "../style.css";

type OtherUserPostProps = {
  dream: string;
};

const InputDreamPage: React.FC<OtherUserPostProps> = ({ dream }) => {
  return (
    <Box position={"relative"} display="inline-block">
      <img
        src="./sakura.png"
        alt="他人の投稿の桜画像"
        width={180}
        height={180}
      />
      <Typography
        fontSize={dream.length > 30 ? 10 : 14}
        position={"absolute"}
        top={dream.length > 24 ? "55%" : "50%"}
        left="50%"
        color="white"
        maxWidth={100}
        sx={{
          fontFamily: "Zen Kurenaido",
          fontWeight: 400,
          fontStyle: "normal",
          wordWrap: "break-word",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        {dream}
      </Typography>
    </Box>
  );
};

export default InputDreamPage;
