import React, { useState } from "react";
import { Box } from "@mui/material";
import SakuraCardArea from "../input-form/SakuraCardArea.tsx";
import GeneratePictureModal from "../input-form/modal/GenatatePictureModal.tsx";

const InputDreamPage: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      marginTop={10}
    >
      <SakuraCardArea value={value} setValue={setValue} />
      <GeneratePictureModal dreamTitle={value} />
    </Box>
  );
};

export default InputDreamPage;
