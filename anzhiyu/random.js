var posts=["2024/10/18/RocketMQ的部署和测试(2)/","2024/10/18/RocketMQ初识消息队列(1)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };