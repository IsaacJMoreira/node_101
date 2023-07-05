const Fabricantes = require('./Fabricantes.js');
const Produtos = require('./Produtos.js');


Produtos.belongsTo(Fabricantes, {
    foreignKey: 'id_fabricante'
});

Fabricantes.hasMany(Produtos, {
    foreignKey: 'id_fabricante'
});


module.exports = {
    Fabricantes,
    Produtos
}
