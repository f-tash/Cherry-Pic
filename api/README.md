# Cherry-Pic API Mock

## 概要
Cherry-Pic API Mock は `prism-mock` を使用してローカル環境で API モックサーバーを立ち上げる．

## 起動方法
以下のコマンドを実行することで，モックサーバーを起動できる．

```sh
docker compose up  
```

## API エンドポイント
モックサーバーは `http://localhost:4010/` で動作する．

### 夢のリストを取得

- **HTTP メソッド**: `GET`
- **エンドポイント**: `http://localhost:4010/dreams`
- **レスポンス**: 夢のリストを返す．

#### リクエスト例
```sh
curl -X GET http://localhost:4010/dreams
```

#### レスポンス例
```json
[{"dream_id":"string","dream_title":"string","url":"string"}]
```

