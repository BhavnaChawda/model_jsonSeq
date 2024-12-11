import { Sequelize } from "sequelize";
const sequelize = new Sequelize("testsequelize","root","root",{
        host:'localhost',
        dialect:'mysql',
        logging:console.log
    });

    sequelize.authenticate()
    .then(()=>
    {
        console.log("database connected.....");
    }).catch(err=>
    {
          console.log("errro")
    });
    export default sequelize;