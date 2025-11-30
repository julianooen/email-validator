# 📧 Validador de E-mail

Sistema de validação de e-mail desenvolvido com HTML, CSS e JavaScript puro. Projeto criado como atividade prática para demonstrar validação de formulários web com feedback visual e mensagens contextuais.

![Status](https://img.shields.io/badge/status-concluído-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Sobre o Projeto

Este projeto implementa um validador de e-mail completo que verifica se o endereço de e-mail inserido pelo usuário atende aos critérios de formato válido. O sistema fornece feedback imediato com mensagens específicas para cada tipo de erro, ajudando o usuário a corrigir problemas de forma intuitiva.

### ✨ Funcionalidades

- ✅ Validação completa de formato de e-mail
- ✅ Feedback visual com cores (verde para sucesso, vermelho para erro)
- ✅ Mensagens contextuais específicas para cada tipo de erro
- ✅ Validação em tempo real ao sair do campo
- ✅ Interface responsiva e moderna
- ✅ Design com gradiente roxo elegante
- ✅ Orientações claras sobre o formato correto

## 🔍 Validações Implementadas

O sistema verifica:

1. ✅ Campo não vazio
2. ✅ Presença do símbolo @
3. ✅ Apenas um símbolo @ no e-mail
4. ✅ Caracteres antes do @
5. ✅ Domínio após o @
6. ✅ Ponto no domínio
7. ✅ Formato correto do domínio
8. ✅ Extensão válida (mínimo 2 caracteres)
9. ✅ Validação final com expressão regular

## 📁 Estrutura do Projeto

```
playcode/
├── index.html          # Página principal com o formulário
├── src/
│   ├── style.css      # Estilos e design da interface
│   └── script.js      # Lógica de validação
├── RELATORIO.md       # Relatório detalhado da atividade
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Digite um e-mail no campo fornecido
4. Clique em "Validar E-mail" ou saia do campo para validar

### Opção 2: Usar no Playcode.io

1. Acesse [Playcode.io](https://playcode.io)
2. Crie um novo projeto vazio
3. Copie o conteúdo dos arquivos para o editor
4. Execute e teste o validador

## 💡 Exemplos de Uso

| Entrada | Resultado | Mensagem |
|---------|-----------|----------|
| *(vazio)* | ❌ Inválido | Campo não pode estar vazio |
| `usuario` | ❌ Inválido | Deve conter @ |
| `@dominio.com` | ❌ Inválido | Deve haver caracteres antes do @ |
| `usuario@` | ❌ Inválido | Deve haver domínio após o @ |
| `usuario@dominio` | ❌ Inválido | Domínio deve conter ponto |
| `usuario@@dominio.com` | ❌ Inválido | Deve conter apenas um @ |
| `usuario@dominio.com` | ✅ Válido | E-mail válido! |
| `nome.sobrenome@empresa.com.br` | ✅ Válido | E-mail válido! |

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica do formulário
- **CSS3** - Estilização responsiva com gradientes e animações
- **JavaScript (ES6+)** - Validação e manipulação do DOM

### Recursos JavaScript Implementados

- Manipulação do DOM
- Event Listeners (submit, input, blur)
- Expressões regulares
- Arrow functions
- Template literals
- Validação progressiva

## 🎨 Interface

A interface apresenta:

- Design moderno com gradiente roxo (#667eea → #764ba2)
- Campos com bordas dinâmicas que mudam conforme validação
- Mensagens com ícones e cores contextuais
- Box informativo sobre formato válido
- Totalmente responsivo para dispositivos móveis
- Animações suaves em hover e focus

## 📝 Mensagens de Validação

O sistema fornece mensagens específicas para cada situação:

- ⚠️ **Campo vazio**: Orienta o preenchimento
- ❌ **Falta de @**: Informa sobre símbolo obrigatório
- ❌ **@ duplicado**: Alerta sobre formato incorreto
- ❌ **Falta de usuário**: Explica necessidade de caracteres antes do @
- ❌ **Falta de domínio**: Indica necessidade de domínio após @
- ❌ **Domínio sem ponto**: Explica formato do domínio
- ❌ **Extensão curta**: Informa sobre mínimo de caracteres
- ✅ **E-mail válido**: Confirma sucesso da validação

## 🔧 Personalização

Para personalizar o validador:

### Alterar Cores

Edite `src/style.css`:

```css
/* Gradiente do fundo */
background: linear-gradient(135deg, #SEUCOR1 0%, #SUACOR2 100%);

/* Cor de sucesso */
.success { border-color: #SUACOR; }

/* Cor de erro */
.error { border-color: #SUACOR; }
```

### Adicionar Validações

Edite `src/script.js` e adicione suas verificações na função `validarEmail()`.

## 📖 Documentação Adicional

Para mais detalhes sobre o desenvolvimento, metodologia e resultados, consulte o arquivo [`RELATORIO.md`](RELATORIO.md) que contém:

- Introdução detalhada
- Metodologia de desenvolvimento
- Resultados e testes
- Conclusões e aprendizados

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional.

## 👤 Autor

Desenvolvido como atividade prática de validação de formulários web.

## 🎓 Aprendizados

Este projeto demonstra:

- Validação de formulários sem bibliotecas externas
- Manipulação eficiente do DOM
- Feedback visual para melhor UX
- Código limpo e bem documentado
- Boas práticas de desenvolvimento front-end

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
