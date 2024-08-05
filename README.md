Idealização Banco de dados 

```mermaid
erDiagram
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
