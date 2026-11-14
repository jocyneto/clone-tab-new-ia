# AGENTS.md

Orientações para agentes de IA (Claude Code e outros) trabalharem neste repositório.

## Stack

- **Next.js** com **App Router** (rotas e layouts no diretório `app/`)
- **React**
- **JavaScript** puro (sem TypeScript)
- CSS global simples (sem Tailwind, CSS Modules ou bibliotecas de UI)

Versões exatas estão em `package.json`.

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm start        # servir o build de produção
```

Não há testes nem lint configurados. Use `npm run build` para validar mudanças.

## Convenções

- Idioma do conteúdo, commits e documentação: **português (pt-BR)**.
- Componentes como Server Components por padrão; use `"use client"` só quando houver interatividade.
- Mantenha a simplicidade: sem dependências novas sem necessidade.
- Layouts devem funcionar bem no celular, sem rolagem horizontal.
