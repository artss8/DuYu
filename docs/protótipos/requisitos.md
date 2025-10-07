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

**Realizamos uma bateria de testes não funcionais utilizando o Apache JMeter para orquestrar e medir cenários de carga, desempenho, concorrência e comportamentos críticos do back-end e fluxos principais do produto. Todos os requisitos listados abaixo foram considerados no planejamento e testados adequadamente em ambiente de homologação, com registros de execução e evidências arquivadas.**
