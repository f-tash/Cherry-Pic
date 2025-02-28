import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/Cherry-Pic/background.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4, // 背景だけ薄くする
            zIndex: -1, // 背景を後ろに配置
          },
        }}
      >
        <Typography
          fontSize={40}
          position={"absolute"}
          top={3}
          left={"50px"}
          sx={{
            fontFamily: "Noto Serif JP, serif",
            fontOpticalSizing: "auto",
            fontWeight: "normal",
            fontStyle: "normal",
          }}
        >
          Cherry-Pic
        </Typography>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Box mt={8} component={"img"} src="/Cherry-Pic/cherry-pic.png"></Box>
          <Typography
            fontSize={20}
            letterSpacing={1}
            my={5}
            sx={{
              fontFamily: "Noto Serif JP, serif",
              fontOpticalSizing: "auto",
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            心の中の夢が目の前の絵になる。
          </Typography>
          <Typography
            textAlign={"center"}
            lineHeight={1.7}
            my={{ xs: 0, md: 4 }}
            mx={{ xs: 2, md: 0 }}
          >
            Cherry-Picは入力されたあなたの夢を元にaiによって絵を作成します。
            <br />
            早速あなたの夢を描きましょう！
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={{ xs: 2, md: 5 }}
          paddingInline={3}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            onClick={() => navigate("/input")}
            variant="contained"
            style={{
              marginRight: 0,
              marginLeft: 0,
            }}
            sx={{
              bgcolor: "#FF75B6",
              color: "white",
              borderRadius: 15,
              marginTop: 5,
              mx: 5,
              flex: 1,
              maxWidth: 200,
            }}
          >
            試してみる
          </Button>
          <Button
            onClick={() => navigate("/photo-list")}
            variant="contained"
            style={{
              marginRight: 0,
              marginLeft: 0,
            }}
            sx={{
              bgcolor: "#FF75B6",
              color: "white",
              borderRadius: 15,
              marginTop: 5,
              mx: 5,
              flex: 1,
              whiteSpace: "nowrap",
              maxWidth: 200,
            }}
          >
            みんなの夢を見る
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
