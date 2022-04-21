"use strict";
const execute = require("../db/db");

class Login {
    static async login(req, res , next) {
        // res.send("hello")
        try {
            const { useremail, password } = req.body;

                
                const result= await execute(`SELECT * FROM users where useremail='${useremail}' and password='${password}'`);
                // console.log(result);
                // res.send(result)
                if (result.rowCount==1){
                    res.status(200).json({
                        "payload": [
                            {
                                "Message": `Login Sucessful ${useremail}` 
                                
                            }
                        ],
                        "errors": [],
                        "success": true
                    });
                }
                else{
                    res.status(404).json({
                        "payload": [
                            {
                                "Message": `Login unSucessful ${useremail}`
                                
                            }
                        ],
                        "errors": [],
                        "success": false
                    });
                }
                
            }
            
         catch(error) {
            next(error);    
        }
    }

 }

module.exports = Login;