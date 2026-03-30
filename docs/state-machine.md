---
title: State Machine
permalink: /state-machine/
prev: /triggers/
next: /api/
---

# State Machine

`menhera.js` は状態遷移で考えると分かりやすくなります。

```txt
Stable
  ↓
Anxious
  ↓
Dependent / Unstable
  ↓
Exploding
  ↓
Cooldown
  ↓
Stable
```

※ 状況によってループやスキップがあります。

## 各状態

| State | 説明 | 見え方 |
| --- | --- | --- |
| `Stable` | 落ち着いている | ふつうに会話できる |
| `Anxious` | 不安増加 | 返信速度や語尾が気になる |
| `Dependent` | 依存増加 | 優先順位や愛情確認が必要になる |
| `Unstable` | 波が大きい | 急に泣く、怒る、黙るが揺れる |
| `Exploding` | 外へ爆発 | 長文、連投、着信連打 |
| `Cooldown` | 一時的な沈静化 | 落ち着いたように見えるが再発しやすい |

## 補足

`Cooldown` は完全回復ではありません。  
いったん静かになっても、同じ `trigger` が入るとすぐ前段階に戻ることがあります。
