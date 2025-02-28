import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../style.css";
const Home: React.FC = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
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
        <Box component={"img"} src="/cherry-pic.png" alt="Cherry-Blossum" />
        <img
          src="/sakura.png"
          alt="Cherry-Blossum"
          style={{ width: 180, height: 180 }}
        />

        <Typography>心の中の夢が目の前の絵になる。</Typography>
        <Typography>
          Cherry-Picは入力されたあなたの夢を元にaiによって絵を作成します。早速あなたの夢を描きましょう！
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Button
          variant="contained"
          sx={{
            width: 200,
            bgcolor: "#FF75B6",
            color: "white",
            paddingX: 5,
            borderRadius: 15,
            marginBlock: 3,
            mx: 2,
          }}
        >
          試してみる
        </Button>
        <Button
          variant="contained"
          sx={{
            width: 200,
            bgcolor: "#FF75B6",
            color: "white",
            paddingX: 5,
            borderRadius: 15,
            mx: 2,
          }}
        >
          みんなの夢を見る
        </Button>
      </Box>
    </>
  );
};

export default Home;
