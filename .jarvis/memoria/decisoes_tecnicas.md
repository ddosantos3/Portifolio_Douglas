# Decisoes Tecnicas

## 2026-05-29
- Manter o clone por HTTPS para compatibilidade simples com o ambiente local.
- Preservar a estrutura atual do projeto antes de qualquer alteracao funcional.
- Registrar contexto operacional em `.jarvis/memoria` conforme regra global do projeto.

## 2026-05-29 - Conteudo e estrutura
- Manter o site como estatico HTML/CSS, sem introduzir build ou dependencias.
- Remover slider e formulario mock para reduzir friccao e evitar interacao falsa.
- Transformar projetos em secao central do portfolio.
- Manter imagem profissional atual como imagem de perfil e Open Graph.
- Usar links reais somente quando repositorios publicos foram verificados; projetos sem repo ficam como "Em organizacao".

## 2026-05-29 - Arquitetura visual premium
- Manter HTML/CSS/JS simples sem migrar para React/Next.
- Usar `portfolio-data.js` para centralizar dados repetidos e facilitar manutencao.
- Usar GSAP/ScrollTrigger e Lenis via CDN com fallback nativo, preservando performance e funcionamento sem dependencias locais.
- Usar Lucide Icons via CDN, com verificacao defensiva em JavaScript.
- Nao usar porcentagens falsas para habilidades; stack organizada por dominio.
- Background com grid tecnico, ruido sutil e movimento leve, sem efeito visual gamer.
