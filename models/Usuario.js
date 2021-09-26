
module.exports = function (sequelize, Sequelize) {

    const Usuario = sequelize.define('usuarios', {
        
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        
        edad: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        
        ci: {
            type: Sequelize.STRING,
            allowNull: false
        }

    });

    return Usuario;

}
