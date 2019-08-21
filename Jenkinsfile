pipeline {
    agent any
    environment {
        ENVIRONMENT = "test"
    }
    tools {nodejs "node"}

    stages {
        stage('Setup containers') { 
            steps {
                withEnv(["PATH=$PATH:/usr/local/bin"]) {
                    sh 'docker-compose stop && docker stop app'
                    sh 'docker-compose rm -f && docker rm -f app'
                }
            }
        }
        stage('Run tests') { 
            steps {
                withEnv(["PATH=$PATH:/usr/local/bin"]) {
                    sh 'npm run docker_test'
                }
            }
            post {
                always {
                    publishHTML target: [
                        allowMissing: true,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: './coverage',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ]
                }
            }
        }
    }
}
