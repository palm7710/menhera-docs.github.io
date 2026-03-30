---
title: API
permalink: /api/
prev: /state-machine/
next: /debugging/
---

# API

実在しない API ですが、振る舞いの説明として読むと分かりやすくなります。

## `new Menhera(options)`

初期状態を作成します。

```js
import { Menhera } from 'menhera.js'

const kanojo = new Menhera({
  selfEsteem: 0.3,
  dependency: 0.9
})
```

`selfEsteem` は自己評価、`dependency` は愛情や安心感への依存度です。

## `send(message)`

外部入力を送ります。  
日常語では、相手の言動やイベントを渡すイメージです。

```js
kanojo.send('返信遅い')
kanojo.send('既読無視')
```

## `trigger(event)`

トリガーを明示的に発火します。

```js
kanojo.trigger('SNSで他人と絡んでる')
kanojo.trigger('仕事と私どっち')
```

## `getState()`

現在状態を取得します。

```js
kanojo.getState()
// => 'Anxious'
```

## `prePatch(config)`

予防パッチを適用します。  
つまり、不安定化する前に一言入れて事故を減らします。

```js
kanojo.prePatch({
  trigger: '返信遅延',
  action: '事前連絡'
})
```
