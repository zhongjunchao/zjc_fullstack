# 企业协作开发工具

- 你的代码-》 入仓库 -》 远程仓库
    1. git status //查看当前状态
    2. git add .//添加修改到本地仓库
    3. git commit -m 'git command'//确认修改
    4. git push origin main //提交到远程

# Git 考点
  文件 -> 暂存区 -> 仓库
  生成存储记录 , leader check 我们工作和代码的重要手段 
- 如果提交了代码到本地仓库， 后悔了怎么办？ 
- 美团  如何将多次提交合并成一次？ 
- 拼多多， 我要去拼多多
- git bash 打开当前项目
    1.  vi  + :wq  创建文件
    2.  git add . git commit -m   生成一条记录
    3. git rebase -i HEAD^
    