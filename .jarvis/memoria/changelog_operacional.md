# Changelog Operacional

## 2026-05-29
- Clonado o repositorio `ddosantos3/Portifolio_Douglas`.
- Conferidos branch, remoto, README e estrutura inicial.
- Criada memoria operacional local em `.jarvis/memoria`.

## 2026-05-29 - Reposicionamento do portfolio
- Atualizados title, description, keywords e Open Graph.
- Hero trocado para "Analista Tecnico de Sistemas | SQL, Automacao e IA Aplicada".
- Secoes "Quem sou", competencias, projetos, experiencia, certificacoes, stack, como trabalho e contato revisadas.
- Projetos antigos deixaram de comandar a narrativa principal.
- E-mail corrigido de `ddosantosmtk@gmail.com` para `ddosantosmkt@gmail.com`.
- Formulario fake removido.
- README atualizado e AGENTS local criado.
- Validacao estrutural concluida: HTML, anchors, assets locais, ausencia de formulario fake, CSS responsivo e `git diff --check`.

## 2026-05-29 - Redesign premium
- Criada estrutura `assets/images`, `assets/docs`, `assets/icons`, `src/styles`, `src/scripts` e `src/data`.
- Movidos `Douglas.png` e `Curriculo_Douglas_Santos.pdf` para `assets/`.
- Removidos caminhos antigos de `Screenshot_1.png`, `Douglas_de_Oliveira_Santos_CV_Executivo_Classico.pdf` e `style.css` na raiz.
- Recriado layout com hero premium, status de disponibilidade, cards flutuantes, cards 3D, timeline e background vivo sutil.
- Separados dados em `src/data/portfolio-data.js` e comportamento em `src/scripts/main.js`.
- README e AGENTS atualizados para a nova estrutura.
- CDN do Lenis ajustado para `lenis@1.3.23`.
- Validacoes realizadas: caminhos locais, assets via HTTP, CDNs, anchors, ausencia de formulario fake, ausencia de e-mail antigo, CSS responsivo e `git diff --check`.

## 2026-05-29 - Ajuste da foto no hero
- Reduzida a moldura da foto no hero para equilibrar com o bloco de texto.
- Alterado `object-fit` da foto para `contain`, evitando corte da imagem.
- Criada sincronizacao via JS para aproximar a altura do card da foto da altura do bloco textual no desktop.
- Reposicionados cards flutuantes do hero para acompanhar a nova proporcao.

## 2026-05-29 - Sobre e contato flutuante
- Secao Sobre ajustada para exibir cards em grade 2x2 no desktop.
- Adicionado card "Engenharia de Prompt Avancada" aos focos profissionais.
- Removido CTA "Enviar e-mail" da secao Contato.
- Criado botao flutuante `DS` no canto inferior direito com modal de contato.
- Formulario coleta nome, telefone, e-mail e mensagem, gerando e-mail para `ddosantosmkt@gmail.com` via `mailto:`.

## 2026-05-29 - Posicionamento do formulario flutuante
- Formulario de contato deixou de abrir centralizado.
- Popover agora abre acima do icone `DS`, ancorado no canto inferior direito.
- Removido bloqueio de scroll da pagina ao abrir o formulario.
- Adicionado fechamento ao clicar fora do popover.

## 2026-05-29 - Alinhamento de cards
- Ajustadas grades de competencias e projetos para alinhamento consistente entre colunas e linhas.
- Cards agora usam `grid-auto-rows`, altura consistente e `align-items: stretch`.
- Conteudo interno dos cards passou a usar flex column para manter tags e rodapes alinhados.
- Animacao GSAP dos cards foi alterada para ocorrer por grupo com stagger, evitando offsets independentes entre cards da mesma linha.
