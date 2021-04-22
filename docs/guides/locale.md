---
title: '语言设定'
lang: zh-CN
---


# 🈁 语言设定

<Valine />

- 游戏程序乱码解决也可以参考一下设定步骤。


### 解决方案（win10 系统）

::: details ⚙️ 更改系统语言为繁体中文

1. 打开控制面板内的【时间与语言】
![11111](https://user-images.githubusercontent.com/78347270/115210053-2ae83180-a139-11eb-84c1-60387209986d.png)


2. 进入【语言】设定，并在惯用语言内新增语言
![1](https://user-images.githubusercontent.com/78347270/115209633-c0cf8c80-a138-11eb-8d56-cdccd55b82f5.png)

3. 在弹出的新增语言窗口内搜索中文繁体-台湾并选择【下一步】
![2](https://user-images.githubusercontent.com/78347270/115209641-c2995000-a138-11eb-9b19-efa0ce12fb41.png)

4. 保证【安装语言套件】的前提下其余随意勾选，并选择【安装】
![3](https://user-images.githubusercontent.com/78347270/115209643-c2995000-a138-11eb-89d6-dba9bc0ba9d5.png)

5. 安装成功之后，在新增语言下面找到【系统管理语言设定】，将【非Unicode】程序语言修改为中文繁体
![4](https://user-images.githubusercontent.com/78347270/115211301-65060300-a13a-11eb-8579-c32b940d91ce.png)

⚠️ 注意请勿勾选Beta的UTF-8选项，否则可能会直接出现乱码
![8](https://user-images.githubusercontent.com/78347270/115211605-ac8c8f00-a13a-11eb-9892-e66bc94b69e5.png)

::: danger 🚨 系统警告，请谨慎阅读以下内容
- 该方式会导致部分简体中文文档出现乱码情况
- 部分只支持简体中文的程序将无法打开，如易玩通娱乐平台

#### 以上情况均可以重新设定回简体中文来恢复，以乱码形式打开的文档请勿做保存处理，以免丢失重要数据。

:::


::: details 👨🏻‍💻 Locale.Emulator 软件转码

1. 前往杏组的官网下载 Locale.Emulator [https://pooi.moe/Locale-Emulator/](https://pooi.moe/Locale-Emulator/)

- 下载地址1： [v2.4.1.0](https://github.com/xupefei/Locale-Emulator/releases/download/v2.4.1.0/Locale.Emulator.2.4.1.0.zip)
- 下载地址2（MEGA）：[v2.4.1.0](https://mega.co.nz/#F!QYlWRDYK!SZngRnKE1RMKlvCQJGcQBg)

2. 打开下载文件内，找到安装【LEInstaller】双击开始安装 Locale.Emulator
![6](https://user-images.githubusercontent.com/78347270/115212974-0b063d00-a13c-11eb-834b-3242d5f3c9cd.png)

#### 根据官网提示，可以选择安装为
- Install as current user: 仅对当前用户有效，不需要管理员权限
- Install for all users: 需要管理员权限 官方推荐是这个✅
- Portable: LEInstaller.exe启动时也就是要启动软件来选择对应的接入软件，如果对计算机系统熟悉的推荐这个，可以自行选择需要转码的对象

右键某个文件，出现【Locale.Emulator】即为安装成功

3. 找到魔力的启动程序【CGoriginmood\Assets】内的【CGHK.exe】,右键打开Locale.Emulator开始转码
![666](https://user-images.githubusercontent.com/78347270/115214716-c2e81a00-a13d-11eb-8abc-1e9ca877dee7.png)

4. 然后点击【创建快捷方式】， 新建的快捷方式再拖回这个文件夹【CGoriginmood\Assets】

5. 返回【CGoriginmood】在其中找到config文件，修改[EXE_START]下【filename=SGHK.lnk】之后正常打开游戏即可

:::