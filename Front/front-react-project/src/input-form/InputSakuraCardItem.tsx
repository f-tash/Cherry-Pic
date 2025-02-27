import React from "react";
import { Box, TextField } from "@mui/material";
import "../style.css";

const InputSakuraCardItem = ({ value, setValue }) => {
  return (
    <Box position={"relative"} display="inline-block">
      <Box
        component="img"
        src="./sakura.png"
        alt="他人の投稿の桜画像"
        sx={{
          width: 180,
          height: 180,
        }}
      />
      {/* MEMO:ここに夢を入力する */}
      <TextField
        id="outlined-multiline-static"
        variant="outlined"
        multiline
        rows={4}
        placeholder="夢を入力してください"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "150px",
          textarea: {
            color: "white",
            fontFamily: "Zen Kurenaido",
            fontWeight: 400,
            fontStyle: "normal",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
    </Box>
  );
};

export default InputSakuraCardItem;
