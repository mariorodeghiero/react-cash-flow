const original = {
  '1': {
    month: 'fev',
    name: 'xxxxxxx',
    value: 300,
  },
  '2': {
    month: 'mar',
    name: 'yyyyyyyy',
    value: 500,
  },
  '3': {
    month: 'mar',
    name: 'zzzz',
    value: 400,
  },
};

function filterMonth(todos, monthId) {
  const months = ['jan', 'fev', 'mar'];
  return Object.keys(todos.filter(item => item.month === months[monthId]));
}

// Pega apenas as chaves dos atributos
const chaves = Object.keys(original);
// Transforma o objeto em array baseado nas chaves
const todos = chaves.map(chave => original[chave]);

// Filtra aqueles com a propriedade month igual a "mar"
// const filtrados = todos.filter(item => item.month === months[2]);

console.log(todos);
// console.log(filterMonth(todos, 2));
