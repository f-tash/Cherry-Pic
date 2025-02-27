import React from "react";
import { Box, TextField } from "@mui/material";
import "../style.css";

const InputSakuraCardItem = () => {
  return (
    <Box position={"relative"} display="inline-block">
      <img src="./sakura.png" alt="入力用の桜画像" width={180} height={180} />
      <TextField
        id="outlined-multiline-static"
        variant="outlined"
        multiline
        rows={4}
        placeholder="夢を入力してください"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "150px", // 幅を調整
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
