import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SakuraCardArea from "../input-form/SakuraCardArea.tsx";
import GeneratePictureModal from "../input-form/modal/GenatatePictureModal.tsx";

const InputDreamPage: React.FC = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  return (
    <Box
      maxHeight={"100vh"}
      maxWidth={"100vw"}
      overflow={"hidden"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      marginTop={{ xs: 3, md: 8 }}
    >
      <Typography
        component="h1"
        fontSize={40}
        position={"absolute"}
        top={3}
        left={"50px"}
        sx={{
          textAlign: "center",
          fontFamily: "Noto Serif JP, serif",
          fontOpticalSizing: "auto",
          fontWeight: "normal",
          fontStyle: "normal",
        }}
      >
        Cherry-Pic
      </Typography>
      <Typography
        style={{ color: "red", minHeight: "24px", marginBottom: "8px" }}
      >
        {error ? error : ""}
      </Typography>
      <SakuraCardArea value={value} setValue={setValue} />
      <GeneratePictureModal
        dreamTitle={value}
        value={value}
        setError={setError}
      />
    </Box>
  );
};

export default InputDreamPage;
