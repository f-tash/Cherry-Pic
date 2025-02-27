// 写真一覧表示画面の型定義ファイル


// 写真情報の型定義
export type PhotoInfo = {
    dream_id: number; // 画像のID
    dream_title: string; // 画像のタイトル
    url: string; // 画像のURL
};

// ダイアログのPropsの型定義(写真情報を継承)
export type PhotoDialogProps = PhotoInfo & {
    isDialog: boolean; // ダイアログの表示状態
    closeDialog: () => void;
};
