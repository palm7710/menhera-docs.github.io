# 対処法

対処は気合いではなく、負荷が低いうちに用意しておく手順です。
万能な方法はないので、ここでは再利用しやすい最低限の型を残します。

## 平常時に整えておく

- 通知を「緊急」「後でよい」「見なくてよい」に分ける
- しんどい時用の定型文をメモしておく
- 安心できる人と連絡手段を一つだけ決めておく
- 休む基準を感覚ではなく条件で決める

## 負荷が高い日の縮退運転

頭が回らない日は、機能を減らして運転する発想が有効です。
全部を守ろうとせず、壊さないために何を止めるかを先に決めます。

```bash
# emergency-mode
export REPLY_STYLE="short"
export NOTIFICATION_LEVEL="minimum"
export TASK_SCOPE="one-thing-only"
export SOCIAL_MODE="defer-non-urgent"
```

## 緊急時の対応フロー

強い不安や混乱が来たときは、解決より先に安全確保を優先します。

```txt
1. その場の刺激を減らす
2. 水分を取る / 座る / 横になる
3. 返信や判断を保留すると宣言する
4. 危険があるなら一人で抱え込まず外部に接続する
```

### 使い回せる短文

- 「今は整理に時間が必要です。返答はあとでします」
- 「刺激が強く、長文が読めません。要点だけください」
- 「すぐに決めると悪化しそうなので、今日は保留にします」

## 感情ログのテンプレ

あとから見返せる記録は、内容より継続できる軽さが重要です。

```json
{
  "date": "2026-03-30",
  "state": "restless",
  "trigger": "unexpected change",
  "body": ["tight chest", "shallow breathing"],
  "worked": ["mute notifications", "drink water"],
  "avoid_next": ["late-night confrontation"]
}
```
