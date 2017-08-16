# Teste da Cásper Líbero [Link](https://goo.gl/3jDzU0)

### Necessário NodeJS > 6.0.0

### Instalação: npm install

### Uso: node app.js --origem=## --destino=## --tempo=## (output em json)

### Exemplo:
```bash
node app.js --origem=11 --destino=17 --tempo=140

[ { plano: 'Fale Muito 30', valor: 'R$ 205,70' },
  { plano: 'Fale Muito 60', valor: 'R$ 149,60' },
  { plano: 'Fale Muito 120', valor: 'R$ 37,40' },
  { plano: 'Normal', valor: 'R$ 261,80' } ]

```

Não ficou claro o formato do output, por isso fiz em JSON, como uma API.