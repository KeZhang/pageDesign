# docker build --no-cache -t mypost:latest .
docker build  -t kezhang/mypost:latest .
# registry-vpc.cn-shanghai.aliyuncs.com/kezhang/hucar

# VER='v1'
# VER='latest'

# docker tag mypost:latest registry.cn-shanghai.aliyuncs.com/kezhang/mypost:$VER
# docker push registry.cn-shanghai.aliyuncs.com/kezhang/mypost:$VER

# docker login --username=k1024b registry.cn-shanghai.aliyuncs.com
# 
#
#
# docker stop mypost && docker rm mypost
# docker run -d --name mypost -p 5102:80 mypost:latest 

docker push kezhang/mypost:latest
