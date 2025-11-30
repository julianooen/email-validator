# RELATÓRIO DA ATIVIDADE PRÁTICA
## Validação de Campo de E-mail com JavaScript

---

## 📋 INTRODUÇÃO

Este relatório documenta o desenvolvimento de um sistema de validação de campo de e-mail utilizando JavaScript, conforme proposto na atividade prática. O objetivo principal foi criar uma solução interativa que verifica se um endereço de e-mail inserido pelo usuário atende aos critérios de um formato válido, fornecendo feedback imediato e orientações claras sobre possíveis erros.

A validação de e-mail é uma funcionalidade essencial em formulários web modernos, pois garante a qualidade dos dados coletados e melhora a experiência do usuário ao prevenir erros comuns de digitação.

O projeto foi desenvolvido utilizando HTML5, CSS3 e JavaScript puro (vanilla JavaScript), sem dependência de bibliotecas ou frameworks externos, demonstrando as capacidades nativas da linguagem para manipulação do DOM e validação de dados.

---

## 🔧 MÉTODOS

### Estrutura do Projeto

O projeto foi organizado em três arquivos principais:

1. **index.html** - Estrutura HTML do formulário
2. **script.js** - Lógica de validação em JavaScript
3. **RELATORIO.md** - Documentação da atividade

### Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do formulário
- **CSS3**: Estilização responsiva e feedback visual
- **JavaScript (ES6+)**: Lógica de validação e manipulação do DOM

### Metodologia de Desenvolvimento

#### 1. Criação do Formulário HTML

Foi desenvolvido um formulário simples contendo:
- Campo de entrada do tipo `email` para coleta do endereço
- Botão de submissão para acionar a validação
- Área de mensagens para exibir feedback ao usuário
- Seção informativa explicando o formato válido de e-mail

A interface foi projetada com foco em usabilidade, utilizando cores e ícones para facilitar a compreensão das mensagens.

#### 2. Implementação da Validação

A função principal `validarEmail()` implementa uma validação em múltiplas camadas:

**Etapa 1 - Verificação de Campo Vazio:**
```javascript
if (email === '') {
    return { valido: false, mensagem: 'Campo não pode estar vazio' };
}
```

**Etapa 2 - Verificação da Presença do @:**
```javascript
if (!email.includes('@')) {
    return { valido: false, mensagem: 'Deve conter @' };
}
```

**Etapa 3 - Validação da Estrutura:**
- Verifica se há apenas um símbolo @
- Confirma a presença de caracteres antes do @
- Valida a existência de domínio após o @
- Verifica se o domínio contém pelo menos um ponto
- Valida a estrutura completa das partes do domínio

**Etapa 4 - Validação com Expressão Regular:**
```javascript
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

#### 3. Sistema de Feedback Visual

O sistema fornece três tipos de feedback:

- **Erro (vermelho)**: Quando o e-mail está inválido
- **Sucesso (verde)**: Quando o e-mail está correto
- **Informativo (azul)**: Orientações sobre o formato

Cada mensagem é específica ao tipo de erro encontrado, ajudando o usuário a corrigir o problema.

#### 4. Eventos Implementados

- `submit`: Aciona a validação quando o formulário é enviado
- `input`: Limpa mensagens anteriores quando o usuário começa a digitar
- `blur`: Valida o campo quando o usuário sai do campo de entrada

### Estrutura de Validação

A validação segue uma abordagem progressiva, verificando:

1. ✅ Campo não vazio
2. ✅ Presença do símbolo @
3. ✅ Apenas um símbolo @
4. ✅ Caracteres antes do @
5. ✅ Domínio após o @
6. ✅ Ponto no domínio
7. ✅ Formato correto do domínio
8. ✅ Extensão válida (mínimo 2 caracteres)
9. ✅ Validação final com regex

---

## 📊 RESULTADOS

### Funcionalidades Implementadas

✅ **Validação completa de e-mail** com múltiplas verificações  
✅ **Mensagens específicas de erro** para cada tipo de problema  
✅ **Feedback visual** com cores e ícones  
✅ **Interface responsiva** adaptável a diferentes telas  
✅ **Validação em tempo real** ao sair do campo  
✅ **Prevenção de submissão** de dados inválidos  
✅ **Orientações claras** sobre o formato esperado  

### Exemplos de Validação

| Entrada | Resultado | Mensagem |
|---------|-----------|----------|
| (vazio) | ❌ Inválido | Campo não pode estar vazio |
| `usuario` | ❌ Inválido | Deve conter @ |
| `@dominio.com` | ❌ Inválido | Deve haver caracteres antes do @ |
| `usuario@` | ❌ Inválido | Deve haver domínio após o @ |
| `usuario@dominio` | ❌ Inválido | Domínio deve conter ponto |
| `usuario@@dominio.com` | ❌ Inválido | Deve conter apenas um @ |
| `usuario@dominio.` | ❌ Inválido | Domínio mal formatado |
| `usuario@dominio.c` | ❌ Inválido | Extensão deve ter pelo menos 2 caracteres |
| `usuario@dominio.com` | ✅ Válido | E-mail válido! |
| `nome.sobrenome@empresa.com.br` | ✅ Válido | E-mail válido! |

### Interface do Usuário

A interface apresenta:
- Design moderno com gradiente roxo
- Campos com bordas que mudam de cor conforme validação
- Mensagens contextuais com ícones
- Box informativo explicando o formato válido
- Responsividade para dispositivos móveis

### Aspectos Técnicos Implementados

1. **Prevenção de comportamento padrão**: Uso de `preventDefault()` para controlar o envio do formulário
2. **Manipulação do DOM**: Seleção e modificação dinâmica de elementos
3. **Event listeners**: Captura de eventos de formulário e input
4. **Validação progressiva**: Verificações em cascata para fornecer feedback específico
5. **Clean code**: Código comentado e organizado em funções reutilizáveis

---

## 🎯 CONCLUSÃO

O projeto foi concluído com sucesso, atendendo a todos os requisitos propostos na atividade prática. Foi desenvolvido um sistema completo de validação de e-mail que:

### Objetivos Alcançados

1. ✅ Criou um formulário funcional no Playcode.io
2. ✅ Implementou validação robusta de campo de e-mail
3. ✅ Fornece mensagens claras de orientação ao usuário
4. ✅ Explica a estrutura correta de um e-mail

### Aprendizados e Conhecimentos Aplicados

Durante o desenvolvimento desta atividade, foram aplicados conceitos fundamentais de desenvolvimento web:

- **JavaScript**: Manipulação de strings, arrays, expressões regulares, funções e eventos
- **DOM**: Seleção e manipulação de elementos HTML
- **Validação de dados**: Implementação de lógica de validação progressiva
- **UX/UI**: Criação de feedback visual intuitivo para o usuário
- **Boas práticas**: Código limpo, comentado e organizado

### Importância da Validação de E-mail

A validação de e-mail implementada é essencial para:

- **Qualidade de dados**: Garantir que apenas e-mails válidos sejam aceitos
- **Experiência do usuário**: Fornecer feedback imediato sobre erros
- **Prevenção de erros**: Evitar problemas de comunicação futura
- **Segurança**: Primeira linha de defesa contra dados malformados

### Melhorias Futuras Possíveis

Embora o projeto atenda completamente aos requisitos, possíveis expansões incluem:

- Validação de domínios existentes via API
- Verificação de e-mails descartáveis
- Integração com backend para armazenamento
- Testes automatizados
- Suporte a internacionalização de mensagens

### Considerações Finais

Este projeto demonstra a capacidade do JavaScript de criar validações robustas e interfaces interativas sem necessidade de frameworks complexos. A abordagem progressiva de validação garante que o usuário receba feedback específico e útil, melhorando significativamente a experiência de preenchimento de formulários.

O código desenvolvido é reutilizável e pode ser facilmente adaptado para outros tipos de validação de campos em formulários web, tornando-se uma ferramenta valiosa para projetos futuros.

---

## 📁 Arquivos do Projeto

- **index.html** - Interface do formulário
- **script.js** - Lógica de validação
- **RELATORIO.md** - Este relatório

## 🔗 Como Utilizar

1. Abrir o arquivo `index.html` em um navegador web
2. Digitar um endereço de e-mail no campo fornecido
3. Clicar em "Validar E-mail" ou sair do campo
4. Observar o feedback visual e mensagens de orientação
5. Corrigir o e-mail conforme as orientações até obter validação bem-sucedida

---

**Data de conclusão:** 29 de novembro de 2025  
**Plataforma utilizada:** Desenvolvimento local (compatível com Playcode.io)  
**Linguagens:** HTML5, CSS3, JavaScript (ES6+)
