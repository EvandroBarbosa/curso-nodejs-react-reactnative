// Carrega as configurações de fila com o BeeQueue
import Queue from './lib/Queue';

require('dotenv/config');

// Executa as o servidor separado so para as filas
Queue.processQueue();
