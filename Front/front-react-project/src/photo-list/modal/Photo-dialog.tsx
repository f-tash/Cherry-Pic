import React from "react";
import { Dialog, Button, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useMediaQuery, } from "@mui/material";

import { PhotoDialogProps } from "../Photo-list-type"; // ダイアログのプロップスの型定義をインポート

const PhotDialog: React.FC<PhotoDialogProps> = (props) => {
    const isMobile = useMediaQuery("(max-width:850px)");
    // ダイアログを閉じる
    const handleClose = () => {
        props.closeDialog();
    };

    // URLをコピーする
    const copyUrl = async () => {
        try {
            await navigator.clipboard.writeText(props.url);
            alert("URLをコピーしました");
        } catch (e) {
            alert("URLのコピーに失敗しました" + e);
        }
    }

    return (
        <>
            <Dialog open={props.isDialog} onClose={handleClose} sx={{ position: "relative" }}>
                <Box sx={{
                    width: isMobile ? "70%" : "540px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "500px",
                    gap: "20px",
                    backgroundColor: "white",
                    borderRadius: "5%",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }} >
                    <img src={props.url} alt={props.dream_title} style={{
                        maxWidth: "250px",
                        width: isMobile ? "60%" : "250px",
                        height: "auto",
                        borderRadius: "5%",
                    }}></img>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        maxHeight: "100px",
                        maxWidth: "300px",
                        fontSize: "auto"
                    }}>
                        <img src="./sakura.png" alt="Cherry-Blossum" style={{ height: isMobile ? "1.5em" : "56px", width: "auto" }} />
                        <h3 style={{ fontSize: "1.3em" }}>{props.dream_title}</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", maxWidth: "75%" }}>
                        <div style={{ padding: "0.4em", borderRadius: "5px 0 0 5px", backgroundColor: "#D9D9D9", width: isMobile ? "125px" : "90%" }}>
                            <p style={{ margin: "0", overflow: "hidden", textOverflow: "ellipsis" }}>{props.url}</p>
                        </div>
                        <ContentCopyOutlinedIcon sx={{ padding: "0.2em", backgroundColor: "#FFB3B3", width: "auto" }} onClick={copyUrl} />
                    </div>
                    <Button onClick={handleClose} disableRipple sx={{
                        borderRadius: "50%", width: "48px", height: "48px", padding: "0", minWidth: "0",
                        position: "absolute", top: "-16px", left: "-16px", bgcolor: "#FF75B6"
                    }}>
                        <CloseIcon sx={{ color: "white" }}></CloseIcon>
                    </Button>
                </Box>
            </Dialog >
        </>
    );
};

export default PhotDialog;
