# 波卡铭文$DOTA自动Mint脚本

> mac 和 linux比较简单，所以教程是windows的

#### Step 1:安装nodejs

官网下载nodejs合适的版本，如果安装后无法运行，卸载再安装一次

```js
https://nodejs.org/en
```

查看是否安装成功，win + R输入cmd

```js
node -V
npm -v
```

全局安装yarn

```js
npm install -g yarn
```

------



#### Step 2:下载脚本到本地

#### Step 3:安装依赖

终端进入脚本的保存路径

```js
yarn install
```

------

#### Step 4：更改自己的铭文地址

```js
//添加你的铭文钱包助记词
const mnemonic = '';
const sender = keyring.addFromUri(mnemonic);

const recipientAddress = ''  //填写自己铭文钱包的地址
```

#### Step 5: 运行脚本

打开Windows PowerShell，进入到脚本路径

```js
node .\dota.mjs
```

报错属于正常，出现如下内容或区块浏览器有进度，说明成功了

```js
Transaction Hash: 0x8c669614823f9b3bcd6ceeb85d90bb42fdsfsdfsdfsdfsdfdsfsdfs4dd97dd5e
Transaction Hash: 0x0f8d5587797ebbdfdsfsdfdsfdsfsdf7daa08ecfac2f34f881ceb4a80860b4c3
Transaction Hash: 0x8c669614823f9b3bcd6ceeb85d90bb42fdsfsdfsdfsdfsdfdsfsdfs4dd97dd5e
Transaction Hash: 0x0f8d5587797ebbdfdsfsdfdsfdsfsdf7daa08ecfac2f34f881ceb4a80860b4c3
Transaction Hash: 0x8c669614823f9b3bcd6ceeb85d90bb42fdsfsdfsdfsdfsdfdsfsdfs4dd97dd5e
Transaction Hash: 0x0f8d5587797ebbdfdsfsdfdsfdsfsdf7daa08ecfac2f34f881ceb4a80860b4c3
```

