# 【青训营】轻服务数据存储



## 插入数据

### 插入单条数据

```js
module.exports = async function(params, context) {
  // 使用 inspirecloud.db.table 获取数据表
  const PersonTable = inspirecloud.db.table('person');
  // 使用 create 方法创建一条数据
  const personItem = PersonTable.create({name: 'Jack', age: 18});
  // 创建完后，也可新增其他字段
  personItem.gender = 'male';
  // 调用 PersonTable 的 save 方法将数据存入数据库
  await PersonTable.save(personItem);
  // 返回当前所有记录
  const personItemList = await PersonTable.where().find();
  return {
    result: personItemList,
  };
}
```



## 查询数据

### 按字段等于某个值查询记录

### 按内嵌字段等于某个值查询记录



### 按字段符合某个正则表达式查询记录

### 按字段大于（小于）某个值查询记录

### 按时间字段位于某个区间查询记录



### 按多个条件查询记录

### 查询记录中特定字段



### 对查询结果排序和分页



### 返回查询结果总条数

### 查询单条数据

### find的返回条数限制

### 逻辑操作符



## 更新数据



## 删除数据





## 分组聚合

### 全部数据求和

### 筛选一部分数据求和

### 将数据分组后求和

### 将数据分组后求和、求平均并重命名字段

### 将数据分组后求组内数据条数



### 针对表达式进行分组和聚合



## 关联查询



## 高速缓存 Redis



