# Grupo Flora
## Resumo
Este projeto visa criar um sistema de classificação de frutas usando modelos de Machine Learning (ML). Os modelos treinados são disponibilizados através de uma API HTTP que permite a previsão da classe de uma fruta com base em uma imagem fornecida.

### Linguagem de programação escolhida 
A tecnologia escolhida foi o React Native, um framework de desenvolvimento móvel criada pelo Facebook que permite a criação de aplicativos nativos para iOS e Android usando JavaScript e React.

### Documentação da aplicação
O app possui duas telas principais:

**Feed**: Onde ficam todos os posts realizados pelos usuários logados.

**Identificação**: Onde o usuário pode fazer o upload de fotos ou utilizar a câmera para identificar a espécie da fruta desejada.

Mas também tem outras rotinas secundárias:

**Login/Registro**: Onde o usuário define como vai utilizar o sistema, criando um cadastro novo, logando em um já existente ou acessando anonimamente.

**Profile**: Onde o usuário pode verificar suas informações e também realizar o Logoff do aplicativo.

## Recursos necessários para executar o aplicativo
### Instalação do Android Studio (Windows e Linux)
Realizar o download da versão "Jellyfish" do Android Studio por meio do site: **https://developer.android.com/studio?hl=pt-br**. Se necessário, seguir documentação disponível no site: **https://developer.android.com/codelabs/basic-android-kotlin-compose-install-android-studio?hl=pt-br#0**

### Efetuar comando para exportar o path do Android
Após baixar e configurar o Android Studio, seguir os seguintes passos para encontrar a pasta do Android SDK:
- No Android Studio, clicar em Tools -> SDK Manager (Campo Android SDK Location).
- Copiar o caminho definido que deve ser dessa forma para o Linux /home/<USER_NAME>/Android/Sdk e dessa forma no Windows C:\Users\<USER_NAME>\AppData\Local\Android\sdk.
- No terminal do android studio, executar na pasta raiz do projeto os seguintes comandos

LINUX
```bash
export ANDROID_HOME=/home/<USER_NAME>/Android/Sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
```

WINDOWS
```bash
set ANDROID_HOME=C:\Users\Filipe Zulian\AppData\Local\Android\Sdk
set PATH=%ANDROID_HOME%\platform-tools;%PATH%

OU

$env:ANDROID_HOME="C:\Users\<USER_NAME>\AppData\Local\Android\Sdk"
$env:PATH="$env:ANDROID_HOME\platform-tools;$env:PATH"
```
### Executar o yarn
Se não possuir instalado na máquina, seguir conforme a documentação **https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable**.

```bash
yarn install
yarn run android
```

Após seguir os passos corretamente, a aplicação deve funcionar conforme o esperado!

### Executar o projeto localmente

Atualmente o projeto aponta os requests `http` para nosso servidor na aws, para apontar os requests para um servidor na máquina local é necessário ir ao arquivo `axios-request-adapter.ts` e alterar a variável `API_BASE_URL` para o IP e porta do servidor local.
