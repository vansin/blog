#  准备YOLO数据集



```python
import json
from PIL import Image
from utils.utils import *
import random
import functools


# 由于文件中有多行，直接读取会出现错误，因此一行一行读取
file = open("data/TAL_OCR_TABLE/TalTabNet_train.json", 'r', encoding='utf-8')
papers = []
for line in file.readlines():
    dic = json.loads(line)
    papers.append(dic)

cmap = plt.get_cmap("tab20b")
colors = [cmap(i) for i in np.linspace(0, 1, 20)]

for img_info in papers:
    img_info_path = 'data/TAL_OCR_TABLE/train_img/' + img_info['filename']
    img = np.array(Image.open(img_info_path))

    plt.figure()
    fig, ax = plt.subplots(1)
    ax.imshow(img)

    n_cls_preds = 20
    bbox_colors = random.sample(colors, n_cls_preds)

    all_x_y = []

    for i,cell in enumerate(img_info['html']['cells']):
        color = bbox_colors[i%20]

        bbox = cell['bbox']
        box_w = bbox[2][0] - bbox[0][0]
        box_h = bbox[2][1] - bbox[0][1]


        all_x_y.extend(bbox)


        bbox1 = patches.Rectangle((bbox[0][0], bbox[0][1]), box_w, box_h, linewidth=2, edgecolor=color, facecolor="none")
        ax.add_patch(bbox1)

        print(cell)

    cells = img_info['html']['cells']


    def get_min(x, y):
        # if x['bbox'][0][0]<y['bbox'][0][0] and x['bbox'][0][0]<y['bbox'][0][0]:
        #     return 1
        # else:
        #     return -1

        # if x['bbox'][0][0]+x['bbox'][0][1] < y['bbox'][0][0]+y['bbox'][0][1]:
        #     return -1
        # else:
        #     return 1

        if x[0]+x[1]<y[0]+y[1]:
            return -1
        else:
            return 1


    def get_max(x, y):
        # if x['bbox'][0][0]>y['bbox'][0][0] and x['bbox'][0][0]>y['bbox'][0][0]:
        #     return 1
        # else:
        #     return -1

        # if x['bbox'][2][0]+x['bbox'][2][1] > y['bbox'][2][0]+y['bbox'][2][1]:
        #     return -1
        # else:
        #     return 1

        if x[0]+x[1]>y[0]+y[1]:
            return -1
        else:
            return 1




    # cells = []
    x1,y1 = min(all_x_y, key=functools.cmp_to_key(get_min))

    # cells.sort(cmp=numeric_compare())
    #  x1,y1 = cells1[0]['bbox'][0][0],cells1[0]['bbox'][0][1]

    x2,y2 = min(all_x_y, key=functools.cmp_to_key(get_max))

    # x2, y2 = cells2[0]['bbox'][2][0],cells2[0]['bbox'][2][1]
    # x2,y2 = cells[-1]['bbox'][0][0],cells[-1]['bbox'][0][1]

    bbox1 = patches.Rectangle((x1, y1), x2-x1, y2-y1, linewidth=5, edgecolor=color, facecolor="none")
    ax.add_patch(bbox1)

    plt.axis("off")

    plt.show()

    print(img_info)

print(len(papers))
```



## 获取大表格左上角与右下角坐标

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804174422.png)



## 数据集问题

并非按照顺时针标注，可能有部分数据集错误



## Python排序技巧





