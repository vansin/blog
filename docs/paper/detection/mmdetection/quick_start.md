```
python demo/image_demo.py \
    demo/demo.jpg \
    configs/faster_rcnn/faster_rcnn_r50_fpn_1x_coco.py \
    checkpoints/faster_rcnn_r50_fpn_1x_coco_20200130-047c8118.pth \
    [--device 0] \
    [--score-thr 0.5]
```



```shell
python demo/webcam_demo.py \
    configs/faster_rcnn/faster_rcnn_r50_fpn_1x_coco.py \
    checkpoints/faster_rcnn_r50_fpn_1x_coco_20200130-047c8118.pth \
    --camera-id 0 \
    --score-thr 0.5
```





```shell
python demo/webcam_demo.py \
    configs/yolo/yolov3_d53_fp16_mstrain-608_273e_coco.py \
    checkpoints/yolov3_d53_fp16_mstrain-608_273e_coco_20210517_213542-4bc34944.pth \
    --camera-id 0 \
    --score-thr 0.5
```





```shell
python demo/webcam_demo.py \
    configs/tabnet/cascade_mask_rcnn_hrnetv2p_w32_20e.py \
    checkpoints/model1.pth \
    --camera-id 0 \
    --score-thr 0.5
```

