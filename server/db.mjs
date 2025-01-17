import { Sequelize, DataTypes } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_DATABASE || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

sequelize.authenticate()  
.then(() => console.log('Connected'))
.catch(err => console.error('Unable to connect ', err));


export const products = sequelize.define('products',{
    product_id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    category:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    price:{
        type: DataTypes.DECIMAL(6,2),
        allowNull: false,
    },
},  {
        tableName: 'products',
        timestamps: false,
    
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

export const accounts = sequelize.define('accounts',{
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


sequelize.sync({alter: true}).then(async () => {
    // console.log(await products.findAll());
    console.log('Product table');
  }).catch(err => {
    console.error('Error ', err);
  });