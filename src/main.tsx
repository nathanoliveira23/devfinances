import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      //Nome do Model no plural:
      transactions: [
          {
            id: 1,
            title: 'Transaction 1',
            amount: 400,
            type: 'withdraw',
            category: 'Food',
            createdAt: new Date()
          },

          {
              id: 2,
              title: 'Transaction 2',
              amount: 700,
              type: 'deposit',
              category: 'Sale',
              createdAt: new Date()
          }
        ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)