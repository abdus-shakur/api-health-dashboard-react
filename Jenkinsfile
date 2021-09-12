pipeline {
    agent any

    tools{
        maven 'M3'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch:'main',credentialsId : 'github_shakur_auth',
                    url : 'https://github.com/abdus-shakur/api-health-dashboard-react.git';
            }
        }
        stage('Build Project'){
            steps{
                nodejs(nodeJSInstallationName: 'Node 14.7'){
                    bat 'dir';
                    bat 'npm install';
                }
            }
        }
        stage('print project contents'){
            steps{
                     nodejs(nodeJSInstallationName: 'Node 14.7'){
                        bat 'npm run build'
                     }
                }
            }
            post{
                always{
                     bat '''
                        rd /s /q docs
                        ren \"./build\" \"./docs\"
                        cd docs
                    '''
                     //ren \"./static\" \"./public\"
                }
            }
        }
    }
}
