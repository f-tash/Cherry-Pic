import React from "react";
import { Dialog } from "@mui/material";
import "./Photo-list.css"; // ダイアログのスタイルをインポート
import { PhotoDialogProps } from "./Photo-list-type"; // ダイアログのプロップスの型定義をインポート

const PhotDialog: React.FC<PhotoDialogProps> = (props) => {
    // ダイアログを閉じる
    const handleClose = () => {
        props.closeDialog();
    }

    return (
        <>
            <Dialog open={props.isDialog} onClose={handleClose} >
                <div className="photo-dialog-container">
                    <img src={props.url} alt={props.title} className="photo-dialog-img"></img>
                    <div className="photo-dialog-title">
                        <img src="./sakura_only.png" alt="Cherry-Blossum" style={{ height: "50px", width: "auto" }} />
                        <h3 style={{ fontSize: "24px" }}>{props.title}</h3>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default PhotDialog;