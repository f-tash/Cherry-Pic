import React from "react";
import { Dialog, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import "../Photo-list.css"; // ダイアログのスタイルをインポート
import { PhotoDialogProps } from "../Photo-list-type"; // ダイアログのプロップスの型定義をインポート

const PhotDialog: React.FC<PhotoDialogProps> = (props) => {
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
                <div className="photo-dialog-container">
                    <img src={props.url} alt={props.dream_title} className="photo-dialog-img"></img>
                    <div className="photo-dialog-title">
                        <img src="./sakura.png" alt="Cherry-Blossum" style={{ height: "56px", width: "auto" }} />
                        <h3 style={{ fontSize: "16px" }}>{props.dream_title}</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                        <div style={{ padding: "0.4em", borderRadius: "5px 0 0 5px", backgroundColor: "#D9D9D9" }}>
                            <p style={{ margin: "0", overflow: "hidden", textOverflow: "ellipsis", width: "350px" }}>{props.url}</p>
                        </div>
                        <ContentCopyOutlinedIcon sx={{ padding: "0.2em", backgroundColor: "#FFB3B3" }} onClick={copyUrl} />
                    </div>
                    <Button onClick={handleClose} disableRipple sx={{
                        borderRadius: "50%", width: "48px", height: "48px", padding: "0", minWidth: "0",
                        position: "absolute", top: "-24px", left: "-24px", bgcolor: "#FF75B6"
                    }}>
                        <CloseIcon sx={{ color: "white" }}></CloseIcon>
                    </Button>
                </div>
            </Dialog >
        </>
    );
};

export default PhotDialog;
