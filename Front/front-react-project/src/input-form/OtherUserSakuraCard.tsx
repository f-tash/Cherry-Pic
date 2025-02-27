import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "../style.css";

type OtherUserPostProps = {
  dreamTitle: string;
  dreamImage: string;
};

const InputDreamPage: React.FC<OtherUserPostProps> = ({
  dreamTitle,
  dreamImage,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      position={"relative"}
      display="inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ overflow: "hidden", cursor: "pointer" }}
    >
      <Box
        component="img"
        src="./sakura.png"
        alt="他人の投稿の桜画像"
        sx={{
          width: 180,
          height: 180,
        }}
      />
      <Typography
        fontSize={dreamTitle.length > 30 ? 10 : 14}
        position={"absolute"}
        top={dreamTitle.length > 24 ? "55%" : "50%"}
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
        {dreamTitle}
      </Typography>
      {/* MEMO:ホバー時に表示される画像 */}
      <Box
        component="img"
        src={dreamImage}
        alt="dream-image"
        position="absolute"
        width="100%"
        height="100%"
        top={0}
        left={0}
        sx={{
          opacity: hover ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </Box>
  );
};

export default InputDreamPage;
