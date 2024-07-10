# Node.js and Google Sheets API Project

Este proyecto utiliza Node.js con Express para mayor velocidad de desarrollo, aprovechando su robustez y eficiencia en la creación de APIs y servicios web. Además, se utiliza Google Sheets API para gestionar datos en una hoja de cálculo de Google, lo que permite almacenar y consultar datos de manera eficiente y escalable.

El frontend de la aplicación está desarrollado en React, elegido por su capacidad para crear interfaces de usuario interactivas y dinámicas. Combinado con Node.js en el backend, proporciona una arquitectura completa que facilita el desarrollo ágil y la integración entre el frontend y el backend.

## Requisitos

- Docker
- Docker Compose
- Node.js (opcional, si deseas ejecutar la aplicación sin Docker)

## Configuración

### Variables de Entorno

Para que la aplicación funcione correctamente, necesitas configurar las siguientes variables de entorno en un archivo `.env` en la carpeta `backend`:

```plaintext
GOOGLE_SERVICE_ACCOUNT_TYPE=service_account
GOOGLE_SERVICE_ACCOUNT_PROJECT_ID=test2-429004
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID=e57137e614913228f76c09763074f37d3b17bcfe
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVkxdWhxIU5rQU\n+xict5GyxDm7l3kO+b6OJ4kE5LwBFGOlROIkO1dQN8eRLfDs7dJ+lTgR5XjZYD8p\nxlnhp+TITkzhznEmSACKjRKgsVQjAzXvCdrX/k9ejaU3/9LRzLKy2hMvDb6WVtxk\n3uJQEYqVPfb4wXidPBY9skcd/9IYeAlw60hbwH+90yaa0WffAucZrGdPWFvVaksI\nEbvMOsc+tkoJOyXfsytYpVKM2rzpG9yiTSiw05X4yS7OdCqrM+xaYUzV2tNT73mT\nBdA7VC5GiKZjUlIhOH4zItPTMJJgOWhDVNcNn0qgbAMT/Q3IyM2GUHdz6QbJnpLu\nmzLFW5VlAgMBAAECggEAB4QvarcO6Y35BAo6NRCPJHSdPMK33/tyNU03TXpRGEd2\nBRrDt8kOR4cGDahJWx6jB/QSWpPgJsxMtZoKGj+ITP3iTyvt87Ev6xvRESeCxYpR\nGNoIl/dnoFDDOgqDsEH2bkEXMF4jHbBFEwHq+CsUKREcFWljg5iUEDWil+yrGh+a\nbwpzfklFnbERoMyNXDJMqUKFM2BGffdKjzs6shpqOl3XVM8wh59nUc6DDnRhCoIw\n5gnQxMJN8mGPR1q9iyAAvlCSg1SgO2gMvuIat34D8WjgjiftvDXRebwVjcxLvvqo\nIO0m4EZzQsj7FobotB6dR19tUGLATM/p0O0Z9592YQKBgQDE6zoF1n65LCNFHhOs\nyT2GWaGTW2eZvWKoFcNtCc6uahG0BN3Wh9vL1hiifSnfzRFN0LqVN9qgVyVNxa1h\nrU2COm3YOr+Kkar+tJpBRE7bz+Cr1Fuo0tIswNXCk92XUPZKxkganH9Ji9heScuC\nhj+szrHAF2pL58eLdlqNUH8KbwKBgQDCc3xpbun/PTdK2fRj91OCrQkU/1SGiCMq\nNnfSmCcl7sF5aaLAMygXEpNbhDr006dqu5iuHbwDkey3F1ZDCvFOr7TKU6jKub8u\nq4RO/wxPZhzxg1FbqpLbiOC2GhNuQ59tbiEQzPQy8M0FN3xvP3q3XUqbmW63L1lP\n9IB5JPHXawKBgG/wo/hDmaAcBiS5V0fm0hG4jBAfasJLlXSlgoVOiO4/H7cs+QqG\nCp1SJIjiC9bMVSTeHeLLcH2rbGpMkCYxhRkdq+m6Y74a1pCaDAJEGWv9POORAVX0\nGkQUjq9grRvii0+wbbaq9fTSCXp4Crc1J6dNjF/9L5DcvmN6MTmZ484DAoGAP95a\n4O6TYUikHqvUP/l+ro9TSlhLVRzmH/lgBgX/5c+0MMLnuCWVZ26shAS8sKnMdZxE\nm/wcQzfs/n5l0QOJGwVPZp1v9ZZpG1Uu0hun2XR60UEGugsezYj59hY+h5sihHkF\n11TaaNj7HlmJP6kkD5JO7SjKWtTsivyOLjxaSx0CgYEAk2UlSUxDWnKmM+Mul3aN\n0FHJzOM3VZeNl/ZNQQmiLaDVFBrIbjyybDkj74axil6EaebiXWltaCBUu9Qjm3qG\nIpZQQpvc33/xZOw4tib9HggPYn3zkx4JrixxBfMWF29fhd72SSsbxS7sZyWKaCnG\nVu0g01T4ng8hO0605MJvFFk=\n-----END PRIVATE KEY-----\n"
GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL=test2-311@test2-429004.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_CLIENT_ID=118106444541600769826
GOOGLE_SERVICE_ACCOUNT_AUTH_URI=https://accounts.google.com/o/oauth2/auth
GOOGLE_SERVICE_ACCOUNT_TOKEN_URI=https://oauth2.googleapis.com/token
GOOGLE_SERVICE_ACCOUNT_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
GOOGLE_SERVICE_ACCOUNT_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/test2-311%40test2-429004.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_UNIVERSE_DOMAIN=googleapis.com
```

## Instrucciones de Configuración
  - Clona este repositorio en tu máquina local.
  - Navega a la carpeta backend.
  - Crea un archivo .env y agrega las variables de entorno mencionadas anteriormente.

### Ejecución de la Aplicación

Para levantar la aplicación utilizando Docker Compose, ejecuta el siguiente comando en el directorio raíz del proyecto:

```
docker-compose build && docker-compose up -d
```

Esto levantará tanto el frontend como el backend de la aplicación.

## Acceso a la Aplicación

  La aplicación frontend estará disponible en: `http://localhost:3000`
  
  La API backend estará disponible en: `http://localhost:3001`
  
## Estructura del Proyecto

    frontend: Contiene el código del frontend de la aplicación.
    backend: Contiene el código del backend de la aplicación.

## Uso de Google Sheets API

El backend de la aplicación utiliza la biblioteca google-spreadsheet para interactuar con la API de Google Sheets.
Funciones Clave

  Lectura de Datos: Lee los datos de una hoja de cálculo de Google.
  Actualización de Datos: Actualiza los datos en la hoja de cálculo según la información proporcionada.
  
