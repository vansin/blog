# 科研环境配置

## anaconda安装

https://www.anaconda.com/products/individual#download-section

```shell
sh Anaconda.sh
```

把anaconda的路径添加到PATH环境变量

```shell
echo 'export PATH="/home/tml/anaconda3/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

conda包管理

```shell
conda create -n tensorflow python=3  # 系统自动匹配最高的python版本下载
# 该命令为建立一个名为tensorflow的虚拟环境
conda activate tensorflow  # 激活虚拟环境
conda deactivate #退出虚拟环境
conda remove -n tensorflow --all   #删除虚拟环境
conda list   #查看安装的包
conda install urllib3  #安装包
conda install scrapy==1.3  #安装指定版本的包
conda install -n tensorflow scrapy #在tensorflow环境安装scrapy包

# 删除包
conda remove urllib3
# 查看当前存在的虚拟环境
conda env list

# conda环境克隆
conda create -n tensor222 --clone tensorflow  
conda create -n BBB --clone ~/path # 跨计算机克隆
```