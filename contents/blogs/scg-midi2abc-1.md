---
title: 'MidiからABC記譜法に変換する処理について'
date: '2023-04-01'
tags: ['Score Generator', 'abcjs', 'Python', 'MIDI']
thumbnail: '/images/blogs/scg-midi2abc-1/midi2abc.png'
---

# はじめに
Nextandではmidiファイルを入力すると、その楽譜を表示し、さらにその難易度を自由に変更できるScore ChangerというWebアプリの作成に取り組みました。Webページ上に楽譜を表示するということで、そのための仕組みが必要だったのですが、今回我々はPaul RosenさんとGregory Dykeさんらが作っている[ABCJS](https://www.abcjs.net/)というライブラリに着目しました。このライブラリは[ABC記譜法](https://www.ne.jp/asahi/music/marinkyo/ml/abc-regulo.html.ja)のデータを用意さえすれば、それのいい感じの楽譜を表示してくれます。今回我々のアプリではmidiファイルを対象としていたので、midiファイルをABC記譜法に変換する処理を実装する必要がありました。

# midi to ABCの課題
midiもABCも音を記号化して表したものなので、実装当初は簡単に変換できるものだと考えていました。[MuseScore](https://musescore.org/ja)でもmidi2abcの変換コードが搭載されており、ある程度のmidiファイルに対しては上手く動作していました。しかし様々な種類のmidiファイルを入力していくうちに、そのままでは上手くいかないケースがあることがわかりました。

具体的には、以下の4つの問題が実装時の大きな壁になりました。

1. midiファイルのトラック数とチャネル数の問題

2. midiファイルによっては、noteの長さが正確でない問題

3. 単純なABC記譜法では記述できない楽譜がある問題

4. なっている音と楽譜上の表記は1対1対応しない問題

次回以降の記事でこれら1.～4.の問題について、問題の詳細とその対処法を述べていきたいと思います。