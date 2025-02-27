import React from "react";
import { Box, Button } from "@mui/material";
import SakuraCardArea from "../input-form/SakuraCardArea.tsx";

const InputDreamPage: React.FC = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      marginTop={10}
    >
      <SakuraCardArea />
      <Button
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
    </Box>
  );
};

export default InputDreamPage;
