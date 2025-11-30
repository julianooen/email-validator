// Seleciona os elementos do DOM
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');

/**
 * Função principal de validação de e-mail
 * Verifica se o e-mail atende aos critérios necessários
 * @param {string} email - O endereço de e-mail a ser validado
 * @returns {object} - Objeto contendo status de validade e mensagem
 */
function validarEmail(email) {
    // Remove espaços em branco no início e fim
    email = email.trim();
    
    // Verifica se o campo está vazio
    if (email === '') {
        return {
            valido: false,
            mensagem: '⚠️ O campo de e-mail não pode estar vazio. Por favor, preencha o campo.',
            tipo: 'error'
        };
    }
    
    // Verifica se contém o símbolo @
    if (!email.includes('@')) {
        return {
            valido: false,
            mensagem: '❌ E-mail inválido: O e-mail deve conter o símbolo @ (arroba).',
            tipo: 'error'
        };
    }
    
    // Divide o e-mail em partes (antes e depois do @)
    const partes = email.split('@');
    
    // Verifica se há mais de um @
    if (partes.length !== 2) {
        return {
            valido: false,
            mensagem: '❌ E-mail inválido: O e-mail deve conter apenas um símbolo @.',
            tipo: 'error'
        };
    }
    
    const usuario = partes[0];
    const dominio = partes[1];
    
    // Verifica se há caracteres antes do @
    if (usuario.length === 0) {
        return {
            valido: false,
            mensagem: '❌ E-mail inválido: Deve haver caracteres antes do símbolo @. Exemplo: usuario@dominio.com',
            tipo: 'error'
        };
    }
    
    // Verifica se há caracteres após o @
    if (dominio.length === 0) {
        return {
            valido: false,
            mensagem: '❌ E-mail inválido: Deve haver um domínio após o símbolo @. Exemplo: usuario@dominio.com',
            tipo: 'error'
        };
    }
    
    // Verifica se o domínio contém um ponto
    if (!dominio.includes('.')) {
        return {
            valido: false,
            mensagem: '❌ E-mail inválido: O domínio deve conter um ponto (.). Exemplo: usuario@dominio.com',
            tipo: 'error'
        };
    }
    
    // Verifica a estrutura do domínio
    const partesDominio = dominio.split('.');
    
    // Verifica se há conteúdo antes e depois do ponto no domínio
    for (let i = 0; i < partesDominio.length; i++) {
        if (partesDominio[i].length === 0) {
            return {
                valido: false,
                mensagem: '❌ E-mail inválido: O domínio está mal formatado. Verifique os pontos no domínio.',
                tipo: 'error'
            };
        }
    }
    
    // Verifica a extensão (última parte do domínio)
    const extensao = partesDominio[partesDominio.length - 1];
    if (extensao.length < 2) {
        return {
            valido: false,
            mensagem: '❌ E-mail inválido: A extensão do domínio deve ter pelo menos 2 caracteres. Exemplo: .com, .br, .net',
            tipo: 'error'
        };
    }
    
    // Expressão regular mais completa para validação final
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(email)) {
        return {
            valido: false,
            mensagem: '❌ E-mail inválido: O formato do e-mail não está correto. Use o formato: usuario@dominio.com',
            tipo: 'error'
        };
    }
    
    // Se passou por todas as validações
    return {
        valido: true,
        mensagem: `✅ E-mail válido! O endereço "${email}" foi preenchido corretamente.`,
        tipo: 'success'
    };
}

/**
 * Exibe mensagem na tela para o usuário
 * @param {string} mensagem - Texto da mensagem
 * @param {string} tipo - Tipo da mensagem (error, success, info)
 */
function mostrarMensagem(mensagem, tipo) {
    messageDiv.textContent = mensagem;
    messageDiv.className = `message ${tipo}`;
    
    // Remove classes do input e adiciona a apropriada
    emailInput.classList.remove('error', 'success');
    if (tipo === 'error') {
        emailInput.classList.add('error');
    } else if (tipo === 'success') {
        emailInput.classList.add('success');
    }
}

/**
 * Limpa as mensagens e estilos
 */
function limparMensagem() {
    messageDiv.className = 'message';
    messageDiv.textContent = '';
    emailInput.classList.remove('error', 'success');
}

// Event listener para o envio do formulário
form.addEventListener('submit', function(evento) {
    // Previne o comportamento padrão de envio do formulário
    evento.preventDefault();
    
    // Obtém o valor do campo de e-mail
    const emailDigitado = emailInput.value;
    
    // Valida o e-mail
    const resultado = validarEmail(emailDigitado);
    
    // Exibe a mensagem apropriada
    mostrarMensagem(resultado.mensagem, resultado.tipo);
    
    // Se for válido, você pode fazer algo adicional aqui
    if (resultado.valido) {
        console.log('E-mail válido submetido:', emailDigitado);
        // Aqui você poderia enviar para um servidor, por exemplo
    }
});

// Event listener para limpar mensagem quando usuário começa a digitar
emailInput.addEventListener('input', function() {
    if (messageDiv.classList.contains('error') || messageDiv.classList.contains('success')) {
        limparMensagem();
    }
});

// Validação em tempo real (opcional) - mostra dicas enquanto o usuário digita
emailInput.addEventListener('blur', function() {
    if (emailInput.value.trim() !== '') {
        const resultado = validarEmail(emailInput.value);
        mostrarMensagem(resultado.mensagem, resultado.tipo);
    }
});
