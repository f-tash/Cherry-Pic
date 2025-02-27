# Cherry-Pic Backend
PR TIMES HACKATHON




## 起動方法
以下のコマンドを実行することで，モックサーバーを起動できる．

```sh
docker compose up  
```

## API エンドポイント
モックサーバーは `http://localhost:8080` で動作する．

### 夢のリストを取得

- **HTTP メソッド**: `GET`
- **エンドポイント**: `http://localhost:8080/dreams`
- **クエリパラメータ**:
- `limit` (任意): 取得する夢の件数の上限（最小値 1）。
- **レスポンス**: 夢のリストを返す．

#### リクエスト例
```sh
curl -X GET http://localhost:8080/dreams
```

#### レスポンス例
```json
[
  {
    "created_at": "2025-02-27T01:23:21.401188",
    "id": 2,
    "title": "Travel the world",
    "url": "https://example.com"
  },
  {
    "created_at": "2025-02-27T01:22:29.996158",
    "id": 1,
    "title": "Travel the world",
    "url": "https://example.com/travel2"
  }
]
```