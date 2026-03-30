---
title: Overview / Installation
permalink: /getting-started/
prev: false
next: /core-model/
---

# Overview

`menhera.js` は、感情の不安定性、依存、対人関係の揺らぎを、状態管理として扱うための非同期人間ライブラリです。

もちろん実在しません。  
これは「メンヘラ的な行動・思考・感情の揺れ」を、ソフトウェアの概念で読むためのパロディドキュメントです。

本ドキュメントでは、関係性の揺れを主に次の三つに分解します。

- `State`
  その時点の気分や安定度
- `Trigger`
  状態を揺らすきっかけ
- `Behavior`
  外から見える振る舞い

## Installation

```bash
npm install menhera.js
```

※ 実在しません。

導入に必要なのはパッケージではなく、以下の前提です。

| Dependency | 意味 | 欠けたときの挙動 |
| --- | --- | --- |
| 安心感 | 嫌われていないという土台 | 深読みが増える |
| 返信の予測可能性 | いつ返るか見えること | `返信遅延` が重大イベントになる |
| 一貫した態度 | 急に温度を変えないこと | `既読無視` 判定が走りやすい |

## Quick Start

```js
import { Menhera } from 'menhera.js'

const kanojo = new Menhera({
  selfEsteem: 0.3,
  dependency: 0.9
})

kanojo.send('既読無視')
```

このコードが意味していることは単純です。  
自己評価が低く、依存度が高い状態で `既読無視` イベントが入ると、不安定化しやすいというだけです。

## このドキュメントの見方

最初に [Core Model](/core-model/) で `State / Trigger / Behavior` の定義を見て、次に [State Machine](/state-machine/) で流れを読むと追いやすくなります。
