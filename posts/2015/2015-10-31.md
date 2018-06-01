---
layout: post
title: "Git Prático"
date: "2015-10-31"
---

Seja você um jornalista, um designer, um advogado ou um contador. Se informações digitais são parte do seu negócio e você tem frequentemente a necessidade de organizar diferentes versões desses arquivos, sugiro que começe já a usar Git. Talvez sua maior dor de cabeça sejam as milhares de cópias do mesmo arquivo que você tem espalhados pelo seu disco. Talvez você queira simplesmente ser capaz de criar um registro cronológico flexível das modificações que determinado arquivo ou diretório sofreu. Talvez você queira explorar variações no conteúdo desses arquivos sendo ainda capaz de recupera-las em outra ocasião.

Para usar Git a primeira coisa a fazer é intalar o programa no seu computador. Navegue até o [site oficial](https://git-scm.com/downloads) e baixe o instalador. Caso tenha dúvidas vá até forums online como o [Stack Overflow](https://pt.stackoverflow.com/tags/git/info) e pergunte. Para absoluto controle o ideal é realmente operar o programa pela linha de comando. Caso a linha de comando seja coisa de outro mundo pra você, vá em frente e use uma interface gráfica que te agrade. Uma muito popular se chama [GitHub](https://github.com/) mas há outra que vale a pena conferir também chamada [GitLab](https://about.gitlab.com/). Essa te permite criar repositórios protegidos de graça.

```bash
#!/bin/bash
git config --global user.name "Meu Nome"
git config --global user.email "meu@nome.com"
git init projeto
```

```text
Initialized empty Git repository in /Users/You/projeto/.git/
```

Git é bacana por que está no centro de uma série de outras coisas muito interessantes. A revolução do software livre é feita *commit* a *commit* em repositórios Git distribuídos ao redor do mundo inteiro. Cada um desses espaços contém uma infinidade de idéias e informações práticas ou teóricas para o funcionamento de mecanismos computacionais dos quais cada vez mais nós humanos somos dependentes.

## Versionando arquivos

Agora que você já iniciou um repositório Git na sua máquina, agregue um novo arquivo para experimentar. Vale remarcar que o comando anterior também criou um novo diretório chamado projeto e nele inicializou seu repositório. Entre nessa pasta para verificar algumas informações básicas sobre ele.

```bash
#!/bin/bash
cd projeto && git status
```

```text
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```

Isto significa que você está em um repositório que foi apenas inicializado. Significa também que o diretório de trabalho deste repositório está vazio ou contém apenas arquivos que foram configurados para serem ignorados.
Aproveite e crie um arquivo de texto dentro deste diretório contendo algumas linhas de texto. Salve suas modificações e verifique novamente o status do seu repositório.

```bash
#!/bin/bash
cd projeto && vim leiame.txt
git status
```

```text
On branch master
Initial commit
Untracked files:
  (use "git add <file>..." to include in what will be committed)

  leiame.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Vamos *trackear* o novo arquivo conforme diz pra fazer a mensagem impressa no console. Em seguida cheque novamente o _status_ do seu repo.

```bash
#!/bin/bash
git add leiame.txt
git status
```

```text
On branch master
Initial commit
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

  new file:   leiame.txt
```

Façamos então um registro do estado desse arquivo.

```bash
#!/bin/bash
git commit -m "Adiciona novo arquivo de texto"
```

```text
[master (root-commit) 802cf6b] Adiciona novo arquivo de texto
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 leiame.txt
```

Dê uma olhada no log.

```bash
#!/bin/bash
git log
```

```text
commit 802cf6b06925a6bb66342002d150962ce1608616
Author: Meu Nome <meu@nome.com>
Date:   2015-10-31 20:46:10 -0300

    Adiciona novo arquivo de texto
```

Legal, você acaba de fazer um registro do estado do seu arquivo de texto utilizando Git. A partir de agora não importa quantas modificações você faça no seu arquivo de texto, você sempre poderá voltar a esta versão. Além disso você também terá um sem número de benefícios sobre simplesmente copiar o arquivo, que é a solução mais comum para este problema. Essas vantagens serão assunto de uma próxima postagem.

Espero que você tenha aprendido o básico sobre a criação de repositórios Git. Deixe qualquer dúvida ou sugestão abaixo nos comentários ou envie sua mensagem direto para o meu e-mail. Obrigado!
