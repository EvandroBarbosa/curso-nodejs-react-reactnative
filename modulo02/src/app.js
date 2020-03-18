/* Configurações para servir a aplicação */

// Carrega o modulo de configuração de variaveis ambiente
import 'dotenv/config';

// Carrega o modulo do express na aplicação
import express from 'express';

// Carrega o modulo do express async errors para permitir que o Sentry capture os erros
import 'express-async-errors';

// Modulo para formatação de mensagem de erros
import Youch from 'youch';

// Carrega o modulo path do node para localizar diretorio dentro da aplicação
import path from 'path';

// Carrega o modulo do sentry
import * as Sentry from '@sentry/node';

// Adicionando o modulo de cors
import cors from 'cors';

// Carrega o arquivo de rotas
import routes from './routes';

// Carrega as configurações do sentry
import sentryConfig from './config/sentry';

// Carrega as configurações de banco de dados
import './database';

class App {
  constructor() {
    // Method que levantará o servidor da aplicação
    this.server = express();

    // Inicia o Sentry para tratamento de erros
    Sentry.init(sentryConfig);

    // Middlewares expecificos para algumas funciolidades
    this.middlewares();

    // Configurando chamada das Rotas da aplicação
    this.routes();

    // Method que captura exceções
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

// Export por padrão a class App
export default new App().server;
