# playground-nuqs

クエリパラメタを型安全に使う[nuqs](https://nuqs.47ng.com/)で遊ぶ

## やりたいこと

- ページング
- モーダルの開閉状態（Notionでやってるあれ）

[ここ](https://nuqs.47ng.com/docs/parsers/community/tanstack-table?pageIndexUrlKey=#filtering)に
- Filtering
- Sorting

の具体例がないので作ってみるか



## 12/26(木)
[pnpm だけ使うようにする](https://pnpm.io/ja/only-allow-pnpm)
package.json

```json
{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}
```

nuqs を追加する

```sh
pnpm add nuqs
```

scssを使いたかったので追加

```sh
pnpm add sass -D
```


## 12/27(金)
SCで検索フォームを作る
https://www.ai-shift.co.jp/techblog/3766

## 12/28（土）

ダミーのAPI
https://dummyjson.com/docs


## 12/31（火）
Next.jsのエラーバウンダリーについて

https://nextjs.org/docs/app/api-reference/file-conventions/error

