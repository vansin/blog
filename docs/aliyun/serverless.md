# 函数计算

此文档部署于阿里云serverless函数计算

## 市场调研

100w cu的免费使用流量




## yaml

## 普通配置

```yaml
ROSTemplateFormatVersion: '2015-09-01'
Transform: 'Aliyun::Serverless-2018-04-03'
Resources:
  make_poster:
    Type: 'Aliyun::Serverless::Service'
    Properties:
      Description: helloworld
      NasConfig: Auto
      LogConfig:
        Project: problemlog
        Logstore: accesslog
    make_poster:
      Type: 'Aliyun::Serverless::Function'
      Properties:
        Handler: index.handler
        Runtime: python3
        Timeout: 600
        CodeUri: ./
        EnvironmentVariables:
          ops_config: production
          PYTHONUSERBASE: /code/.fun/python
          LD_LIBRARY_PATH: >-
             /code/.fun/root/usr/local/lib:/code/.fun/root/usr/lib:/code/.fun/root/usr/lib/x86_64-linux-gnu:/code/.fun/root/usr/lib64:/code/.fun/root/lib:/code/.fun/root/lib/x86_64-linux-gnu:/code/.fun/root/python/lib/python2.7/site-packages:/code/.fun/root/python/lib/python3.6/site-packages:/code:/code/lib:/usr/local/lib
      Events:
        httpTrigger:
          Type: HTTP
          Properties:
            AuthType: ANONYMOUS
            Methods:
              - POST
              - GET
#  my_domain:
#    Type: 'Aliyun::Serverless::CustomDomain'
#    Properties:
#      DomainName: Auto
#      Protocol: HTTP
#      RouteConfig:
#        Routes:
#          /*:
#            ServiceName: make_poster
#            FunctionName: make_poster

```

### Nas配置

```yaml

ROSTemplateFormatVersion: '2015-09-01'
Transform: 'Aliyun::Serverless-2018-04-03'
Resources:
  make_poster:
    Type: 'Aliyun::Serverless::Service'
    Properties:
      Description: helloworld
      NasConfig: Auto
      LogConfig:
        Project: problemlog
        Logstore: accesslog
    make_poster:
      Type: 'Aliyun::Serverless::Function'
      Properties:
        Handler: index.handler
        Runtime: python3
        Timeout: 600
        CodeUri: ./
        EnvironmentVariables:
          ops_config: production
          PYTHONUSERBASE: /mnt/auto/python
          LD_LIBRARY_PATH: >-
            /mnt/auto/root/usr/local/lib:/mnt/auto/root/usr/lib:/mnt/auto/root/usr/lib/x86_64-linux-gnu:/mnt/auto/root/usr/lib64:/mnt/auto/root/lib:/mnt/auto/root/lib/x86_64-linux-gnu:/mnt/auto/root/python/lib/python2.7/site-packages:/mnt/auto/root/python/lib/python3.6/site-packages
      Events:
        httpTrigger:
          Type: HTTP
          Properties:
            AuthType: ANONYMOUS
            Methods:
              - POST
              - GET
#  my_domain:
#    Type: 'Aliyun::Serverless::CustomDomain'
#    Properties:
#      DomainName: Auto
#      Protocol: HTTP
#      RouteConfig:
#        Routes:
#          /*:
#            ServiceName: make_poster
#            FunctionName: make_poster

```

### 导出来的配置

PYTHONPATH发生了变化

```yml 
ROSTemplateFormatVersion: '2015-09-01'
Transform: 'Aliyun::Serverless-2018-04-03'
Resources:
  make_poster:
    Type: 'Aliyun::Serverless::Service'
    Properties:
      Description: helloworld
      Role: >-
        acs:ram::xxxxxxxxxx:role/aliyunfcgeneratedrole-cn-shanghai-make-poster
      LogConfig:
        Project: problemlog
        Logstore: accesslog
        EnableRequestMetrics: false
      VpcConfig:
        VpcId: xxxxxxxx
        VSwitchIds:
          - vsw-uf67xxxxxxxxf9
        SecurityGroupId: sg-uf6xxxxxxxxur4amut
      TracingConfig: Disable
      NasConfig:
        UserId: 10003
        GroupId: 10003
        MountPoints:
          - ServerAddr: 'xxxxxxx-oqy82.cn-shanghai.nas.aliyuncs.com:/xxxxxx'
            MountDir: /mnt/auto
      InternetAccess: true
    make_poster:
      Type: 'Aliyun::Serverless::Function'
      Properties:
        Handler: index.handler
        Runtime: python3
        Timeout: 600
        MemorySize: 128
        EnvironmentVariables:
          LD_LIBRARY_PATH: >-
            /code/.fun/root/usr/local/lib:/code/.fun/root/usr/lib:/code/.fun/root/usr/lib/x86_64-linux-gnu:/code/.fun/root/usr/lib64:/code/.fun/root/lib:/code/.fun/root/lib/x86_64-linux-gnu:/code/.fun/root/python/lib/python2.7/site-packages:/code/.fun/root/python/lib/python3.6/site-packages:/code:/code/lib:/usr/local/lib:/mnt/auto/root/usr/local/lib:/mnt/auto/root/usr/lib:/mnt/auto/root/usr/lib/x86_64-linux-gnu:/mnt/auto/root/usr/lib64:/mnt/auto/root/lib:/mnt/auto/root/lib/x86_64-linux-gnu:/mnt/auto/root/python/lib/python2.7/site-packages:/mnt/auto/root/python/lib/python3.6/site-packages
          NODE_PATH: >-
            /code/node_modules:/usr/local/lib/node_modules:/mnt/auto/node_modules
          PATH: >-
            /code/.fun/root/usr/local/bin:/code/.fun/root/usr/local/sbin:/code/.fun/root/usr/bin:/code/.fun/root/usr/sbin:/code/.fun/root/sbin:/code/.fun/root/bin:/code:/code/node_modules/.bin:/code/.fun/python/bin:/code/.fun/node_modules/.bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/sbin:/bin:/mnt/auto/root/usr/local/bin:/mnt/auto/root/usr/local/sbin:/mnt/auto/root/usr/bin:/mnt/auto/root/usr/sbin:/mnt/auto/root/sbin:/mnt/auto/root/bin:/mnt/auto/python/bin:/mnt/auto/node_modules/.bin
          PYTHONPATH: >-
            /mnt/auto/python/lib/python2.7/site-packages:/mnt/auto/python/lib/python3.6/site-packages
          PYTHONUSERBASE: /code/.fun/python
          ops_config: production
        InstanceType: e1
        InstanceLifecycleConfig:
          PreFreeze:
            Handler: ''
            Timeout: 3
          PreStop:
            Handler: ''
            Timeout: 3
      Events:
        httpTrigger:
          Type: HTTP
          Properties:
            Qualifier: LATEST
            AuthType: anonymous
            Methods:
              - POST
              - GET
```