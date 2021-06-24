# 炼丹炉

## 必备环境盘点

### clash 高速上网

### 搜狗输入法

### vscode

### jetbrain全家桶 

#### Pycharm

```shell
sudo snap install pycharm-professional --classic
```

#### Webstorm

```shell
sudo snap install webstorm --classic
```


#### Clion

```shell
sudo snap install clion --classic
```


## Cuda 11.1(第一次安装了高版本的软件)
> Cuda 11.1

## docker

> docker

## 常规软件


## anaconda安装

为什么选择anaconda来管理炼丹炉的环境，因为anaconda能够创建不同python版本的虚拟环境，这是virtualenv等库不能比拟的。

https://www.anaconda.com/products/individual#download-section

```shell
sh Anaconda.sh
```

把anaconda的路径添加到PATH环境变量

```shell
export PATH="/home/tml/anaconda3/bin:$PATH"
source ~/.zshrc
```

conda包管理

```shell
# 查看所有虚拟环境
conda info --envs

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
