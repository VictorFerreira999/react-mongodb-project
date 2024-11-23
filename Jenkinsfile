pipeline {
    agent any
    environment {
        DOCKER_COMPOSE_FILE = "docker-compose.yml" // Nome do arquivo Docker Compose
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando o repositório...'
                git branch: 'main', url: 'https://github.com/VictorFerreira999/react-mongodb-project.git'
            }
        }
        stage('Build and Deploy') {
            steps {
                echo 'Construindo e iniciando os contêineres com Docker Compose...'
                sh 'docker-compose down || true' // Para garantir que contêineres antigos sejam parados
                sh 'docker-compose up --build -d'
            }
        }
    }
    post {
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo 'Aplicação construída e executando com sucesso!'
        }
        failure {
            echo 'Ocorreu um erro durante o pipeline.'
        }
    }
}
