## 1) Criar e gerenciar múltiplas checklists

**Cenário: Criar uma checklist**

* **Given** que estou autenticado e na tela “Minhas Checklists”
* **When** crio uma checklist chamada “Viagem SP”
* **Then** vejo “Viagem SP” na lista de checklists e ela está vazia

**Cenário: Renomear uma checklist**

* **Given** que existe a checklist “Lista 1”
* **When** renomeio para “Lista de Compras”
* **Then** a lista passa a se chamar “Lista de Compras”

**Cenário: Excluir uma checklist**

* **Given** que existe a checklist “Temporária”
* **When** excluo essa checklist
* **Then** ela não aparece mais na minha lista

**Cenário: Adicionar e reordenar itens**

* **Given** que estou dentro da checklist “Viagem SP”
* **When** adiciono os itens “Comprar passagens” e “Reservar hotel” e movo “Reservar hotel” para o topo
* **Then** a ordem exibida é “Reservar hotel”, “Comprar passagens”

---

## 2) Criar conta e fazer login

**Cenário: Registrar nova conta**

* **Given** que estou na tela de cadastro
* **When** informo e-mail válido e senha forte e confirmo
* **Then** a conta é criada e entro no aplicativo autenticado

**Cenário: Login válido**

* **Given** que possuo conta com e-mail e senha corretos
* **When** informo as credenciais na tela de login
* **Then** sou autenticado e redirecionado ao dashboard

**Cenário: Login inválido**

* **Given** que estou na tela de login
* **When** informo senha incorreta três vezes
* **Then** vejo uma mensagem de erro e o sistema limita novas tentativas

---

## 3) Escolher cores de tema

**Cenário: Trocar tema**

* **Given** que estou nas preferências de aparência
* **When** seleciono o tema “Escuro”
* **Then** a interface muda para o tema “Escuro”

**Cenário: Manter tema em novo acesso**

* **Given** que uso o tema “Escuro”
* **When** faço logout e login novamente
* **Then** o tema “Escuro” continua aplicado

---

## 4) Visualizar atividades em Kanban

**Cenário: Ver colunas do Kanban**

* **Given** que tenho tarefas com status “A Fazer”, “Em Progresso” e “Concluído”
* **When** abro o dashboard Kanban
* **Then** vejo as três colunas e cada tarefa na coluna correta

**Cenário: Mover tarefa entre colunas**

* **Given** que a tarefa “Preparar slides” está em “A Fazer”
* **When** arrasto para “Em Progresso”
* **Then** o status é atualizado e a tarefa aparece em “Em Progresso”

---

## 5) Atribuir níveis de prioridade

**Cenário: Definir prioridade**

* **Given** que criei a tarefa “Comprar passagens”
* **When** marco prioridade “alta”
* **Then** a tarefa exibe o rótulo “alta”

**Cenário: Ordenar por prioridade**

* **Given** que tenho tarefas com prioridades alta, média e baixa
* **When** escolho ordenar por prioridade (alta → baixa)
* **Then** vejo primeiro as tarefas de prioridade alta

---

## 6) Notificações por e-mail

**Cenário: Configurar antecedência**

* **Given** que estou nas configurações de notificações
* **When** defino alerta para 1 hora antes do prazo
* **Then** a preferência é salva

**Cenário: Disparo de e-mail**

* **Given** que a tarefa “Entregar relatório” tem prazo hoje às 18:00 e alerta 1 hora antes
* **When** for 17:00
* **Then** recebo um e-mail com o título da tarefa e a data/hora do prazo

**Cenário: Não notificar tarefa concluída**

* **Given** que a tarefa “Enviar proposta” está marcada como concluída
* **When** chega a hora do alerta configurado
* **Then** nenhum e-mail é enviado

---

## 7) Convidar outros usuários

**Cenário: Enviar convite (visualização)**

* **Given** que tenho a checklist “Evento da Banda”
* **When** convido “[maria@example.com](mailto:maria@example.com)” com permissão “visualizar”
* **Then** “[maria@example.com](mailto:maria@example.com)” recebe um convite por e-mail

**Cenário: Acessar checklist convidado (visualização)**

* **Given** que “[maria@example.com](mailto:maria@example.com)” aceitou o convite de “visualizar”
* **When** abre a checklist “Evento da Banda”
* **Then** consegue ver os itens mas não editar

**Cenário: Convite inválido**

* **Given** que estou convidando alguém
* **When** informo um e-mail em formato inválido
* **Then** vejo uma mensagem pedindo para corrigir o e-mail

---

## 8) Ordenar e filtrar atividades

**Cenário: Ordenar por prazo (ascendente)**

* **Given** que tenho tarefas com prazos diferentes
* **When** ordeno por prazo do mais próximo para o mais distante
* **Then** a lista exibe as tarefas nessa ordem

**Cenário: Filtrar por status e prioridade**

* **Given** que tenho tarefas com vários status e prioridades
* **When** aplico filtro status “Em Progresso” e prioridade “média”
* **Then** só vejo tarefas “Em Progresso” com prioridade “média”

**Cenário: Limpar filtros**

* **Given** que a lista está filtrada
* **When** clico em “Limpar filtros”
* **Then** todas as tarefas voltam a ser exibidas

---
