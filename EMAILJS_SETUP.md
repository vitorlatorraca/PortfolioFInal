# EmailJS Setup Instructions

Para que o formulário de contato funcione e você receba emails em `vitorlatorraca5@gmail.com`, siga estes passos:

## 1. Criar conta no EmailJS

1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita (plano gratuito permite 200 emails/mês)

## 2. Configurar Email Service

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Selecione **Gmail** (ou seu provedor de email)
4. Conecte sua conta Gmail (vitorlatorraca5@gmail.com)
5. Anote o **Service ID** gerado

## 3. Criar Email Template

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template assim:

**Subject:**
```
Contact from Portfolio: {{from_name}}
```

**Content:**
```
You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. No campo **To Email**, coloque: `vitorlatorraca5@gmail.com`
5. Anote o **Template ID** gerado

## 4. Obter Public Key

1. Vá em **Account** > **General**
2. Copie o **Public Key**

## 5. Configurar Variáveis de Ambiente

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione as seguintes variáveis:

```env
REACT_APP_EMAILJS_SERVICE_ID=seu_service_id_aqui
REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
REACT_APP_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

3. Reinicie o servidor de desenvolvimento (`npm start`)

## 6. Testar

1. Preencha o formulário de contato no site
2. Envie uma mensagem de teste
3. Verifique se recebeu o email em vitorlatorraca5@gmail.com

## Nota

O arquivo `.env` está no `.gitignore` para não expor suas credenciais no GitHub. Certifique-se de configurar as variáveis de ambiente também na plataforma de deploy (Vercel, Netlify, etc.) se estiver fazendo deploy.


