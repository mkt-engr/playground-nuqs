# playground-nuqs

クエリパラメタを型安全に使う[nuqs](https://nuqs.47ng.com/)で遊ぶ

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
