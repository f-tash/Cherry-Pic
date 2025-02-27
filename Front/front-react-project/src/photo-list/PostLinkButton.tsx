import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

// 投稿ページへのリンクボタン
const PostLinkButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/input");
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          textAlign: "center",
          position: "fixed",
          bottom: "50px",
          right: "50px",
          borderRadius: "50%",
          padding: "0", minWidth: "0",
          width: "56px",
          height: "56px",
          backgroundColor: "#FF75B6",
          color: "white",
          opacity: 0.5,
          "&:hover": { opacity: 1 },
        }}
      >
        <AddIcon />
      </Button>
    </>
  );
};

export default PostLinkButton;
