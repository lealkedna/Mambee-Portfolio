Idealização Banco de dados 

```mermaid
erDiagram
    DESTAQUE {
        id int pk
        titulo VARCHAR(255)
        imagem_url VARCHAR(255)
        data_destaque TIMESTAMP
    }

    CONTATO {
        int id PK
        string nome
        string email
        string motivo_contato
        string mensagem
    }

    MOTIVO_CONTATO {
        int id PK
        string descricao
    }

    CONTATO ||--|| MOTIVO_CONTATO : "tem"

```
