pipeline {
    agent any
    stages {
        stage('Build & Deploy') {
            steps {
                script {
                    // Pull latest code and rebuild containers
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }
    post {
        success {
            echo 'LMS Website updated successfully!'
        }
    }
}