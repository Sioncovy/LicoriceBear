# Github Action 自动部署 VitePress 博客到云服务器
## 前言
首先你得有个 Github 仓库，再在自己电脑上装个 git（），再得有个云服务器
## 生成 rsa 格式 ssh-key
运行下列命令
```shell
ssh-keygen -m PEM
```
在自己电脑内找到 ssh 目录
### 找到它在哪
#### Mac
```
/Users/用户/.ssh
```
#### Windows
```
C:\Users\用户\.ssh
```

目录中 id_rsa 为私钥，id_rsa.pub 为公钥
## 服务器配置 - 以 Ubuntu 为例

### ssh 免密登陆
在 `/root/.ssh` 中找到 `authorized_keys`，将自己电脑上的 `id_rsa.pub` 的内容复制粘贴到里面，并保存

这样在自己电脑终端内运行 `ssh 用户名@服务器ip` 就能免密登陆了
### nginx 配置
因为比较复杂，自己网上找找教程，安装好了在配置信息里把自己域名指向到服务器上自己准备部署的根目录位置就行

## Github Action
### 创建流程配置文件
在仓库根目录下创建 `.github/workflows/自己喜欢的名称.yml`
```yml
name: 部署到百度云服务器 # action名称
on: [push] # 在推送的时候运行此 action

jobs:
  deploy_job:
    runs-on: ubuntu-latest  # 运行环境
    name: build
    steps:
      # check out the repository
      - uses: actions/checkout@v3 # 这里使用了github官方提供的action,checkout项目到虚拟机上
      - uses: pnpm/action-setup@v2 # 这里使用的 pnpm 官方推荐方法，github action 中没有提供 pnpm，只有 npm 和 yarn
        with:
          version: 7    
      - name: Install Dependencies
        run: pnpm i
      - name: Build
        run: pnpm build

      # 利用 action 把 build 好的文件上传到服务器 /home/StudyBlog 路径下
      - name: SFTP Deploy
        uses: wlixcc/SFTP-Deploy-Action@v1.2.4
        with:  
          username: 'root'   # 登陆的服务器上的用户名
          server: '${{ secrets.SERVER_IP }}' # 引用 Github 仓库配置好的服务器 ip
          ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }} # 引用 Github 仓库配置好的本机私钥
          local_path: './docs/.vitepress/dist/*'  # 项目要部署的目录中的所有文件
          remote_path: '/home/StudyBlog' # 服务器上的指定目录
```
注意要将 `local_path` 和 `remote_path` 修改为正确的目录

### 私密配置信息
由于我们要部署到服务器上，且不能暴露我们服务器的 ip 和密钥，减少被攻击的风险。所以流程配置文件中我们以引用环境变量的形式来使用配置信息

打开 Github 仓库，找到 `Settings -> Security -> Secrets and variables -> Actions`

在 `Secrets` Tab 中点击 New repository secret

分别配置 `SERVER_IP`，值为服务器 IP 地址；以及 `SSH_PRIVATE_KEY` 为本机生成的 `id_rsa` 密钥

## 结尾
当把项目推送到 Github 时，就会自动执行脚本流程，在仓库顶栏 `Actions` 可以查看详情内容，成功后就可以通过域名访问自己部署到云服务器上的博客了
