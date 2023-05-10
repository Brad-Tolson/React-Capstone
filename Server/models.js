const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = require("./database");
const pets = require("./petData.js");


const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numChildren: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  homeType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  currentPets: {
    type: DataTypes.STRING,
    allowNull: true
  }
});


const Pet = sequelize.define('Pet', {
  petId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// const Application = sequelize.define('Application', {
//   petId: {
//     type: DataTypes.INTEGER,
//     // primaryKey: true,
//     references: {
//       model: Pet,
//       key: 'petId'
//     }
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'userId'
//     }
//   },
//   children: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   homeType: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   experience: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   petHistory: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });
// User.hasMany(Application);
// Pet.hasMany(Application);
// Application.belongsTo(User);
// Application.belongsTo(Pet);
// (async function() {
//   await sequelize.sync({force: true});

//   // for (const petData of pets) {
    const seed = async ()=> await Pet.bulkCreate(pets);
//   // }
  
//   console.log('Database synced successfully');
// })();



module.exports = { seed, User, Pet };
