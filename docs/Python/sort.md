# Python排序技巧



```python
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


```



