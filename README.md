# DuYu — App de Checklist
Integrantes: Arthur S., Enzo M., Lowan T., Lucas S. e Manassés Z. <br>
O **DuYu** é um aplicativo de checklist simples e colaborativo para criar listas, priorizar atividades, receber lembretes e compartilhar com outras pessoas.

---

## Navegação rápida (docs)

- [→ Ir para a página do Fluxograma](docs/protótipos/fluxograma.md)
- [→ Ir para a página de Casos de Uso (UML)](docs/protótipos/casos-de-uso.md)
- [→ Ir para a página dos Diagramas de Sequência (UML)](docs/protótipos/sequencia.md)
- [→ Ir para a página de Histórias de Usuário](docs/protótipos/historias-de-usuario.md)
- [→ Ir para a página de Requisitos Não Funcionais](docs/protótipos/requisitos.md)
- [→ Ir para o Backlog](docs/pictures/backlog.md)
  
---

## Objetivo do projeto
Entregar um app de checklist que permita organizar responsabilidades, priorizar o que é importante e não perder prazos.

---
## Funcionalidades do DuYu
- Criar e gerenciar múltiplas checklists.
- Autenticação: criar conta e fazer login.
- Temas (cores) para personalização.
- Dashboard em Kanban para acompanhar itens pendentes/em curso/concluídos.
- Prioridades (alta/média/baixa).
- Notificações por e-mail próximas ao prazo final.
- Compartilhamento de checklists (visualização/edição).
- Ordenação e filtros por status, prioridade e prazo.

## As histórias de usuário detalhadas estão em:  
![`História de usuário`](docs/protótipos/historias-de-usuario.md)

---

## Requisitos não funcionais

* **Desempenho** — app abre em até **3s** (4G comum); criar/mover/editar item em **≤ 1s**; e-mails de prazo em **≤ 5 min**.
* **Confiabilidade** — disponibilidade mensal **≥ 99%**; **backup diário** por **30 dias**; se cair, volta em **≤ 1h**.
* **Segurança** — **HTTPS** em tudo; senhas com **hash** (bcrypt/Argon2); **limite de tentativas** no login; permissões **dono / editor / leitor**.
* **Privacidade (LGPD)** — **coletar só o necessário**; botões para **baixar dados** e **apagar conta** (em até **30 dias**); e-mails com **descadastro**.
* **Acessibilidade** — **bom contraste** e fontes legíveis; **navegação por teclado**; **não usar só cor** para prioridade.
* **Usabilidade** — criar a primeira checklist em **~1 min**; **mensagens de erro** claras; **desfazer** exclusões por **5s**.
* **Escalabilidade** — começar com **5.000 usuários/mês** e **100 simultâneos**; poder **subir mais instâncias**; crescer sem travar.
* **Compatibilidade** — navegadores recentes (**Chrome/Edge/Firefox/Safari**); layout **responsivo** desde **360px**; funciona com internet fraca (**cache simples**).
* **Monitoramento** — **logs** com data/hora e ação principal; **métricas** (tempo de resposta, taxa de erros); **alertas** quando piorar.
* **Qualidade e Manutenção** — **testes** dos fluxos principais (login, CRUD, Kanban, e-mail); **lint/format + review**; **deploy** sem cair e **rollback ≤ 10 min**.
* **E-mails e Notificações** — configurar **SPF/DKIM**; evitar **e-mails duplicados**; todo e-mail com **link de descadastro**.
* **Dados** — **regras no banco** para evitar dados quebrados; **histórico simples** (quem mudou o quê e quando); **logs** por **90 dias**.

## Método de Teste de Requisitos Não Funcionais 

* **Realizamos uma bateria de testes não funcionais utilizando o Apache JMeter para orquestrar e medir cenários de carga, desempenho, concorrência e comportamentos críticos do back-end e fluxos principais do produto. Todos os requisitos listados abaixo foram considerados no planejamento e testados adequadamente em ambiente de homologação, com registros de execução e evidências arquivadas.**

---

## Modelagem e Fluxos
- Casos de Uso (UML): [`docs/protótipos/casos-de-uso.md`](docs/protótipos/casos-de-uso.md)  
  ![Casos de Uso](docs/pictures/casos-de-uso.png)

- **Diagrama de Sequência (UML):** [`docs/protótipos/sequencia.md`](docs/protótipos/sequencia.md)  
  ![sequencia](docs/pictures/DS_Cadastro.png)
  ![sequencia](docs/pictures/DS_Compartilhamento.png)
  ![sequencia](docs/pictures/DS_CriarChecklist.png)
  ![sequencia](docs/pictures/DS_GerenciarPrioridade.png)
  ![sequencia](docs/pictures/DS_LogCleaner.png)
  ![sequencia](docs/pictures/DS_Login.png)

- **Fluxograma do usuário:** [`docs/protótipos/fluxograma.md`](docs/protótipos/fluxograma.md)  
  ![Fluxograma](docs/pictures/Fluxograma(1).jpg)
  ![Fluxograma](docs/pictures/Fluxograma(2).jpg)

---

## Backlog
Organização do projeto:
![Backlog](docs/pictures/Screenshot_6.png)

---

## Telas do app (Figma)
Link: https://www.figma.com/make/S1HP6Y5hbNzYachz7UF8ov/Website-Design-for-DuYu?fullscreen=1

---

