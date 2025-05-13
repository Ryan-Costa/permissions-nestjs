## RBAC vs ABAC

Este projeto explora dois modelos de controle de acesso amplamente utilizados:

### 🔐 RBAC (Role-Based Access Control)

Um modelo simples baseado em papéis. Cada usuário recebe uma role (como `ADMIN`, `WRITER`, `READER`) que define quais ações ele pode realizar. É fácil de implementar e escalar em sistemas pequenos e médios.

### 🧠 ABAC (Attribute-Based Access Control)

Um modelo mais flexível, que leva em conta atributos do usuário, do recurso e do contexto. Em vez de depender apenas de roles, ele permite regras como:

> "Um usuário só pode editar um post se for o autor" ou  
> "Gerentes podem acessar relatórios apenas durante o horário comercial".

ABAC é ideal para cenários onde o controle precisa ser mais granular e dinâmico.

---

Este projeto implementa ambos os modelos para demonstrar suas diferenças e como combiná-los em sistemas modernos com segurança baseada em permissões.
