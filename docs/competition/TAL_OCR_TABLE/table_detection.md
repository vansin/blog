![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210805102238.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210805104301.png)





```shell
 ln -s /home/tml/vansin/deepeye/detection/resource/01YOLO/yolo/YOLOcode/PyTorch-YOLOv3/data/custom/labels/train /home/tml/vansin/lab-try/PyTorch-YOLOv3/data/TAL_OCR_TABLE/labels
```



```shell
ln -s /datasets/TAL_OCR_TABLE/labels /home/tml/vansin/lab-try/PyTorch-YOLOv3/data/TAL_OCR_TABLE/labels  
```





```pyhton
poetry run yolo-detect --images data/samples/ \
--model config/yolov3-custom.cfg \
--weights checkpoints/yolov3_ckpt_214.weights \
--classes config/custom.data \
--conf_thres 0.01 \
--nms_thres 0.01
```









