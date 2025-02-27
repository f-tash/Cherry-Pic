import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./style.css";
const Home: React.FC = () => {
  return (
    <Box>
      <Typography
        fontSize={40}
        fontWeight={"bold"}
        sx={{
          fontFamily: "Noto Serif JP, serif",
          fontOpticalSizing: "auto",
          fontWeight: "normal",
          fontStyle: "normal",
        }}
      >
        Cherry-Pic
      </Typography>
      <Typography>心の中の夢が目の前の絵になる。</Typography>
      <Typography>
        Cherry-Picは入力されたあなたの夢を元にaiによって絵を作成します。早速あなたの夢を描きましょう！
      </Typography>
      <Button>試してみる</Button>
    </Box>
  );
};

export default Home;
