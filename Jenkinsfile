pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'phaham'
        DOCKERHUB_PASSWORD = '1724@Ubuntu'
        IMAGE_NAME = 'batch-api'
        IMAGE_TAG = 'v1'
    }

    stages {
        // stage('Clone Repo') {
        //     steps {
        //         git 'https://github.com/Phaham/Simple-Project-for-ec2-service.git'
        //     }
        // }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USER --password-stdin'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME:$IMAGE_TAG .'
            }
        }


        stage('Push Image') {
            steps {
                sh 'docker push $DOCKERHUB_USER/$IMAGE_NAME:$IMAGE_TAG'
            }
        }

        // stage('Deploy to EC2') {
        //     steps {
        //         sshagent(['ec2-ssh']) {
        //             sh '''
        //             ssh -o StrictHostKeyChecking=no ubuntu@EC2_PUBLIC_IP << EOF
        //             docker stop batch-api-container || true
        //             docker rm batch-api-container || true
        //             docker pull phaham/batch-api:v1
        //             docker run -d -p 3000:3000 --name batch-api-container phaham/batch-api:v1
        //             EOF
        //             '''
        //         }
        //     }
        // }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@13.201.55.60 "
                        docker rm -f batch-api-container || true &&
                        docker pull phaham/batch-api:v1 &&
                        docker run -d -p 3000:3000 --name batch-api-container phaham/batch-api:v1
                    "
                    '''
                }
            }
        }
    }
}
