# Riscos e Gaps

- Projeto nao possui testes automatizados configurados.
- Validacao atual depende de revisao manual no navegador.
- Mudancas em HTML/CSS devem considerar responsividade antes de publicacao.
- Projetos sem repositorio publico foram marcados como "Em organizacao" para evitar CTA falso.
- Curriculo final depende do arquivo PDF presente no repositorio; se houver arquivo mais recente fora do repo, precisa ser substituido.
- Validacao visual por Playwright nao foi executada porque o ambiente nao possui Node/npx, navegador instalado, nem `python3-venv` para instalar Playwright em ambiente temporario.
- Animacoes e icones usam CDNs; o site possui fallback para renderizacao e animacao basica, mas CDN deve ser conferida no deploy final.
- Conteudos de cards sao renderizados via JavaScript local; se JS for desabilitado, hero e estrutura principal permanecem visiveis, mas listas dinamicas nao aparecem.
- Validacao de console em navegador real nao foi executada por ausencia de navegador/Node/runtime JS no ambiente local; validacao estatica e HTTP foi concluida.
- Formulario flutuante `DS` esta comentado temporariamente no HTML; nao aparece no front e nao recebe envios.
- Para reativar o formulario, sera necessario backend funcional de envio ou Netlify Forms com deteccao/notificacao disponiveis no plano usado.
- Testes em `localhost` ou arquivo local nao enviam submissao real para a Netlify; o teste valido deve ocorrer no deploy publicado quando o widget for reativado.
