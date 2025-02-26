import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";

type OtherUserPostProps = {
  dream: string;
};

const InputDreamPage: React.FC<OtherUserPostProps> = ({ dream }) => {
  return (
    <Box position={"relative"}>
      <img src="./sakura.png" />
      <Typography
        fontSize={14}
        position={"absolute"}
        top={70}
        left={40}
        color="white"
        //MEMO: 適切な長さで改行を行う
        maxWidth={100}
        sx={{
          fontFamily: "Zen Kurenaido",
          fontWeight: 400,
          fontStyle: "normal",
          wordWrap: "break-word",
        }}
      >
        {dream}
      </Typography>
    </Box>
  );
};

export default InputDreamPage;
