# menhera.js

> [![status](https://img.shields.io/badge/status-parody%20library-f3f5f8)](#overview)
> [![language](https://img.shields.io/badge/lang-ja--JP-7c72ff)](#quick-start)
> [![runtime](https://img.shields.io/badge/runtime-relationship%20drama-cfcaff)](#state-machine)
>
> 感情の揺れ、依存、深読み、返信待ちのしんどさを、OSS ライブラリの README っぽく整理するためのパロディドキュメントです。  
> 医療や心理の正式な説明ではなく、「GitHub っぽいのに内容は完全にメンヘラ」という読み物として設計されています。

## Overview

`menhera.js` は、いわゆる「メンヘラ」的な振る舞いを、エンジニアリングの言葉で整理して読むための架空ライブラリです。

ただし、難しい話をしたいわけではありません。  
この README での技術用語は、関係性の中で起きがちなことを分かりやすくラベル付けするための比喩です。

| 用語 | ここでの意味 | ふつうの言い方 |
| --- | --- | --- |
| `state` | 今の気分や安定度 | 機嫌、しんどさ、不安の強さ |
| `trigger` | 状態が崩れるきっかけ | 返信遅延、既読無視、予定変更 |
| `dependency` | 外部入力への依存 | 愛情、承認、安心感がほしい |
| `bug` | 問題行動 | 試し行動、深読み、SNS監視 |
| `patch` | 事前対処 | 先に一言入れる、安心させる |
| `timeout` | 返答待ちの長さ | 返事が遅い、待たされる |

要するに、「なぜこうなるのか分からない」を、「どの条件で不安定になるか」に分解して読む README です。

## Installation

このライブラリは `npm install` では入りません。  
必要なのは Node.js ではなく、関係性の前提条件です。

### Required Dependencies

| Dependency | 内容 | 欠けるとどうなるか |
| --- | --- | --- |
| 安心感 | 嫌われていないと分かること | 深読みが始まりやすい |
| 返信の予測可能性 | いつ返るか見えること | `timeout` が重くなる |
| 言葉の明確さ | 曖昧に濁しすぎないこと | 勝手な補完が走る |
| 優先順位の可視化 | 雑に後回しにしないこと | `仕事と私どっち問題` が発火しやすい |

```bash
# 実際には公開されていません
npm install menhera.js

# 現実の導入手順
# 1. 返信ルールを決める
# 2. 不安になる条件を共有する
# 3. 急ぎ/急ぎじゃないを分ける
# 4. 試し行動を仕様にしない
```

## Quick Start

最小構成はこれです。

- 放置しない
- 曖昧にしない
- 急に冷たくしない
- 返信が遅れるなら先に言う

README 風に書くとこうなります。

```js
import { createRelationship, applyPatch } from 'menhera.js'

const session = createRelationship({
  replyETA: '2h',
  reassurance: true,
  suddenSilence: false
})

session.on('message:seen', () => {
  applyPatch('会議中。返事は遅いけど、あとで返す')
})
```

上のコードが意味していること:

- 既読だけ付けて消えない
- 返信が遅いなら遅いと先に言う
- 相手に「嫌われたかも」の想像だけを残さない

## Concepts

`menhera.js` を読むうえで最低限の概念です。

| Concept | 技術的な見え方 | 身近な例 |
| --- | --- | --- |
| `state` | 内部状態 | 今日は安定している / かなり不安定 |
| `trigger` | 状態遷移の入力 | 返信遅延、素っ気ない短文、急な予定変更 |
| `dependency` | 外部サービス依存 | 愛情確認、連絡頻度、優先されている感覚 |
| `silent failure` | 表面は静かだが内部で壊れている | 急に短文になる、「大丈夫」で閉じる |
| `fatal error` | 例外で処理継続不可 | 長文、泣く、責める、別れ話 |

ここでのポイントは、技術っぽく言い換えても中身は日常的だということです。  
たとえば `dependency` は「npm の依存関係」ではなく、「安心感がないと不安定になる」という意味です。

## Setup

安定稼働のための基本設定です。

### 1. Reply Policy

返信遅延そのものより、「いつ返るのか分からない」状態が危険です。

| 設定 | 良い例 | 悪い例 |
| --- | --- | --- |
| 返信ポリシー | 「夜には返す」 | 既読だけ付けて無言 |
| 遅延通知 | 「今は無理、あとで返す」 | 数時間後に何事もなく戻る |
| 温度感 | 忙しくても短く説明する | 急に冷たい `了解` だけ送る |

### 2. Pre-Patch

`patch` は事前対処です。  
ふつうの言い方では、「不安になる前に安心材料を置いておく」です。

```js
applyPatch([
  '今日は忙しい',
  'でも嫌いになったわけではない',
  '返事は22時までに返す'
])
```

### 3. Trigger Sharing

以下は初期共有しておくと事故が減ります。

- 既読無視に見える状態が苦手
- SNS の更新と返信の差に弱い
- 冗談っぽい突き放しに弱い
- 予定変更に弱い

## Types

`menhera.js` は単一実装ではなく、いくつかの代表的な型があります。

| Type | 説明 | よくある挙動 |
| --- | --- | --- |
| `deep-reader` | 深読み型 | 句読点、絵文字、語尾の変化を読む |
| `observer` | SNS監視型 | 返信はないのに更新があることを検知する |
| `tester` | 試し行動型 | わざと冷たくして反応を見る |
| `princess-mode` | お姫様モード型 | 優先順位や扱いの丁寧さに強く反応する |
| `archivist` | 過去ログ分析型 | 半年前の会話を比較材料として持ち出す |

実際は複合型が多く、`observer + archivist` だと SNS の更新と過去の会話を照合し始めます。

## API

実在しない API ですが、振る舞いの説明として読むと分かりやすいです。

### `createRelationship(options)`

関係性の初期設定を作ります。

```js
const session = createRelationship({
  replyETA: '1h',
  reassurance: true,
  updateIfBusy: true,
  ambiguity: 'low'
})
```

### `applyPatch(message | messages)`

事前パッチを適用します。  
つまり、「不安になる前に一言入れる」です。

```js
applyPatch('返信は遅いけど、あとで返す')
applyPatch(['今日は忙しい', 'でも気にしなくて大丈夫'])
```

### `watchSNS(account)`

SNS監視を開始します。  
平たく言うと、「返信はないのにストーリーは更新されている」を検知する処理です。

```js
watchSNS('@partner')
// => status: "story updated before reply"
```

### `analyzePastLogs(thread)`

過去ログ分析を実行します。

```js
analyzePastLogs(dmThread)
// => diff: "3か月前より絵文字が減っている"
```

### `triggerPrincessMode(reason)`

お姫様モードを起動します。  
「もっと丁寧に扱ってほしい」が強く出る状態です。

```js
triggerPrincessMode('anniversary_ignored')
// => "その扱い、私じゃなくてもよくない？"
```

## State Machine

典型的な流れは以下です。

```txt
stable
  -> anxious        // 返信遅延 / 既読無視 / 予定変更
  -> overthinking   // 深読み / SNS監視 / 過去ログ分析
  -> critical       // 試し行動 / 長文生成 / 泣く
  -> silentFailure  // 急に静かになる
  -> fatalError     // 感情爆発
```

| State | 状態 | ふつうの見え方 |
| --- | --- | --- |
| `stable` | 安定 | 普通に会話できる |
| `anxious` | 不安 | 返信速度や語尾が気になり始める |
| `overthinking` | 深読み中 | 既読時間、SNS、過去ログを照合する |
| `critical` | 限界前 | 試し行動、責め、長文の準備に入る |
| `silentFailure` | 静かな故障 | 急に冷たくなる、返さなくなる |
| `fatalError` | 爆発 | 長文、連投、別れ話、ブロック示唆 |

## Debugging

`debugging` は責めることではなく、原因の切り分けです。  
日常語では、「ケンカの勝ち負けではなく、何が引き金だったかを見る」です。

### Debug Checklist

1. 直前に `trigger` がなかったか
2. 返信遅延が「説明なし」で起きていないか
3. SNS と実際の返信に差がなかったか
4. 曖昧な言い方で相手に補完させていないか
5. 過去の似たパターンを繰り返していないか

```js
debug({
  seenAt: '21:03',
  replyAt: null,
  storyUpdatedAt: '21:10',
  lastMessage: '了解'
})

// result:
// ReplyTimeoutError + SNSMismatch + lowWarmthMessage
```

## Error Handling

問題行動を仕様として放置するのは非推奨です。  
一方で、全部を気合いで直そうとするのも無理があるので、まずは対処を決めます。

| Error | 何が起きているか | 対応 |
| --- | --- | --- |
| `ReplyTimeoutError` | 返信遅延 | 返せないことと目安時刻を先に出す |
| `SeenIgnoreError` | 既読無視に見える | 既読だけで止めない |
| `SNSMismatchError` | SNS監視で差分検知 | 返信より先に動くなら一言入れる |
| `TrialBehaviorError` | 試し行動 | 乗らずに言葉で確認する |
| `LogReplayError` | 過去ログ分析が始まる | その場しのぎより事実確認する |

```js
try {
  await reply()
} catch (error) {
  applyPatch('遅れてごめん。あとでちゃんと返す')
}
```

## Anti-patterns

事故率が高い運用です。

| Anti-pattern | 問題 | ありがちな例 |
| --- | --- | --- |
| `silent deploy` | 説明なしで態度変更 | 急に冷たくなる |
| `hotfix by lie` | 嘘でその場をしのぐ | 後でログ照合される |
| `undefined priority` | 優先順位が見えない | `仕事と私どっち` 問題が続く |
| `test-driven jealousy` | 嫉妬で確認する | わざと他人の話を出す |
| `infinite reassurance` | 無限に安心を約束する | 維持できず後で破綻する |

## Best Practices

地味ですが、以下がいちばん効きます。

- 無言で放置するくらいなら短文で状況共有する
- 安心は抽象語より具体的な予定で出す
- 深読みを責める前に、深読みしやすい入力を減らす
- 試し行動には乗らず、確認は言葉で返す
- SNS と実際の態度を極端にズラさない

## FAQ

### Q. これは恋愛マニュアルですか？

違います。  
恋愛、友人関係、SNS 上の距離感などにあるあるを載せたパロディ README です。

### Q. メンヘラって診断名ですか？

この README では診断名として使っていません。  
不安、依存、深読み、試し行動などが混ざったネット俗語として扱っています。

### Q. 返信が遅いだけで毎回壊れますか？

壊れません。  
ただし、返信遅延、既読無視っぽさ、SNS 更新、曖昧な言葉が重なると一気に不安定になりやすいです。

### Q. お姫様モードって結局何ですか？

「もっと丁寧に扱ってほしい」「優先してほしい」が強く出る状態です。  
わがままの一言で切ると悪化しやすく、全部受けると運用不能になります。

### Q. 過去ログ分析は止められますか？

完全停止は難しいです。  
ただし、曖昧な挙動や繰り返しの不信が減ると頻度は下がります。

## Versioning

このプロジェクトは SemVer ではなく、情緒バージョニングを採用しています。

| Version | 状態 | 主な変更 |
| --- | --- | --- |
| `v1.x calm` | 比較的安定 | 深読みはまだ軽い |
| `v2.x insecure` | 不安増加 | 返信待機の負荷が上がる |
| `v2.5 princess` | お姫様モード強化 | 優先順位チェックが厳しくなる |
| `v3.x drama` | 障害多発 | 試し行動、過去ログ分析、長文化が標準化 |

### Changelog

- `v1.x`: まだ会話で修正しやすい
- `v2.x`: 事前パッチの重要度が上がる
- `v3.x`: 小さな入力でも `critical` に入りやすい

## License / Notice

この README はパロディです。  
実在の個人や属性を正確に説明するものではなく、問題行動を推奨する意図もありません。

- 医療・心理の正式資料ではありません
- 人を雑にラベル化する目的ではありません
- 「メンヘラ」を免罪符にせず、境界線と配慮の両方が必要です

ライセンス名を付けるなら、MIT ではなく `Handle With Care` です。
