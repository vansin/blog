# CascadeTabNet

## 环境准备

```shell
git clone https://github.com/DevashishPrasad/CascadeTabNet
cd CascadeTabNet
```

```shell
docker pull akadirpamukcu/tabnet:latest
```

```shell
docker run --gpus all --rm -ti --ipc=host -v $(pwd):/app -P akadirpamukcu/tabnet --doc /app/imgs --model model1.pth --score 0.4 --output /app/output
```



```python
docker run --gpus all --rm -ti --ipc=host -v $(pwd):/app -P akadirpamukcu/tabnet --doc /app/imgs --model /tabnet/model1.pth --score 0.4 --output /app/output
```



### docker镜像

```dockerfile
FROM akadirpamukcu/tabnet
WORKDIR /tabnet/
ENTRYPOINT []
CMD [ "sh", "-c", "lnmp start; bash"]
```

