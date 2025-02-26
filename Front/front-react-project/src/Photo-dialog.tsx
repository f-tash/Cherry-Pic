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
                    <h3>{props.title}</h3>
                </div>
            </Dialog>
        </>
    );
};

export default PhotDialog;