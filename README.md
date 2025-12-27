# lms-project
installation softwares 
1. java 
2. docker 
3. docker-compose
4. node js 
5. maria db 

commands 
1  sudo apt-get update -y
    2  docker --version
    3  sudo apt  install docker.io
    4  docker-compose --version
    5  sudo apt  install docker-compose -y
    6  free -h
    7  java --version
    8  sudo apt install openjdk-17-jre-headless -y
    9  sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc   https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
   10  echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]"   https://pkg.jenkins.io/debian-stable binary/ | sudo tee   /etc/apt/sources.list.d/jenkins.list > /dev/null
   11  sudo apt update
   12  sudo apt install jenkins
   13  free -h
   14  sudo apt install mariadb-server