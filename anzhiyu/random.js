var posts=["2024/11/16/2024-11-16-对于重装系统的一些心得/","2024/10/18/RocketMQ初识消息队列(1)/","2024/10/20/Dockerfile构建Dockerimage/","2024/10/25/SpringCloudAlibaba 之 Nacos 服务发现/","2024/11/18/SpringCloudAlibaba之Sentinel流量控制/","2024/10/18/RocketMQ的部署和测试(2)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };