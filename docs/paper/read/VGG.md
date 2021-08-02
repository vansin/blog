# VGG

## 训练技巧

尺度扰动

## 保存模型

```python
torch.save(alexnet_model.state_dict(),'../data/self_train.pth')
```


```python
torch.save(alexnet_model,'../data/self_train.pth')
```