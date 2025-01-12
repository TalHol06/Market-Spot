const {Sequelize, DataTypes} = require ("sequelize");

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    password: 'Asdf8124$',
    database: 'GroceryVault',
    port: 5432,
    logging: false,
});

sequelize.authenticate()  
.then(() => console.log('Connected'))
.catch(err => console.error('Unable to connect ', err));


const products = sequelize.define('products',{
    product_id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name:{
        type: DataTypes.STRING(100),
        allowNULL: false,
        unique: true,
    },
    category:{
        type: DataTypes.STRING(50),
        allowNULL: false,
    },
    price:{
        type: DataTypes.DECIMAL(6,2),
        allowNULL: false,
    },
},  {
        tableName: 'products'
    
});

const pictures = sequelize.define('pictures',{
    image_id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name:{
        type: DataTypes.STRING(100),
        references:{
            model: products,
            key: 'product_name',
        },
        allowNull: false,
    },
    image_to_use:{
        type: DataTypes.STRING(500),
        allowNull: false,
    },
},{
    tableName: 'pictures',
});

const accounts = sequelize.define('accounts',{
    account_id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'accounts',
});


sequelize.sync({force: true}).then(() => {
    console.log('Product table');
  }).catch(err => {
    console.error('Error ', err);
  });