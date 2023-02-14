# 愛工大案内する蔵
## コマンド説明

### Dockerコンテナの起動方法
<br />
イメージを作成

```
docker compose build
```
コンテナを立ち上げる
```
docker compose up -d
```

<br />

### goファイルの実行方法
<br />

koukaten2022_GOのコンテナに入る
```
docker exec -it HackU2022_Spring_GO ash
```
cmdディレクトリに入る

```
cd cmd
```
main.goを実行
```
go run main.go
```
<br />

### mysqlのデータを確認する方法
<br />

koukaten2022_DBのコンテナに入る
```
docker exec -it HackU2022_Spring_DB /bin/bash
```
mysqlにログイン(パスワードはadmin)
```
mysql -u root -p
```
DBがあるかを確認
```
SHOW databases;
```

<br />
