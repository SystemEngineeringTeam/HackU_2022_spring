# goバージョン
FROM golang:1.19.3-alpine
# アップデートとgitのインストール
RUN apk add --update &&  apk add git
# appディレクトリの作成
RUN mkdir /server
# ワーキングディレクトリの設定
WORKDIR /server
# ホストのファイルをコンテナの作業ディレクトリに移行
ADD . /server