# RestMultiavatar

**RestMultiavatar** é uma API simples em Node.js que utiliza a biblioteca [Multiavatar](https://multiavatar.com/) para gerar avatares únicos em formato **SVG** e **PNG**. Esta implementação permite hospedar a geração de avatares localmente e consumi-los via API.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multiavatar](https://www.npmjs.com/package/@multiavatar/multiavatar)
- [Sharp](https://www.npmjs.com/package/sharp) (para conversão de SVG para PNG)

## 📌 Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/jaspisistemas/RestMultiavatar
   cd RestMultiavatar
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor:
   ```sh
   npm start
   ```

## 🌐 Rotas Disponíveis

### 🎨 Gerar avatar em **SVG**
```http
GET /avatar/:id.svg
```
- **:id** → Identificador único do avatar (exemplo: `user123`)
- **Retorno:** Um avatar no formato **SVG**
- **Exemplo de uso:**
  ```sh
  http://localhost:3033/avatar/user123.svg
  ```

### 🖼️ Gerar avatar em **PNG**
```http
GET /avatar/:id.png
```
- **:id** → Identificador único do avatar
- **Retorno:** Um avatar no formato **PNG**
- **Exemplo de uso:**
  ```sh
  http://localhost:3033/avatar/user123.png
  ```

## 🛠️ Personalização
Se desejar alterar alguma configuração, edite o arquivo `server.js`.

## 📜 Licença
Este projeto é distribuído sob a licença **MIT**.

---

Feito com ❤️ e código! 🚀