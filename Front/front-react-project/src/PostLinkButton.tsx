import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

// 投稿ページへのリンクボタン
const PostLinkButton: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <>
            <Button onClick={handleClick} sx={{
                textAlign: "center", position: "fixed", bottom: "50px", right: "50px", borderRadius: "50%", backgroundColor: "#FF75B6", color: "white",
                width: "56px", height: "56px", opacity: 0.5, "&:hover": { opacity: 1 }
            }}>
                ＋
            </Button>
        </>
    );
}

export default PostLinkButton;