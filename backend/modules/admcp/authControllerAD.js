
// const ldap = require("ldapjs");
// plugin/server.js
// const Module = require('module');
// const path = require('path');
// global.require = Module.createRequire(path.resolve(__dirname, "../../../../")); // adjust path to main app

const authServiceAD = require("./authServiceAD");

class AuthControllerAD {

    async login(req, res) {

        // const { username, ldapURL, bindDN, bindPassword, storeDetails } = req.body;

        console.log("login in : ", "username", "ldap://172.17.1.54:389", "CN=Administrator,CN=Users,DC=Small01,DC=local", "Wonder@555");

        try {

            const result = await authServiceAD.loginWithCredentials("ldap://172.17.1.54:389", "CN=Administrator,CN=Users,DC=Small01,DC=local", "Wonder@555");

            console.log("ad login result", result);

            console.log("Session stored successfully");
            res.status(200).send({
                status: 200,
                message: "User logged in successfully",
            });


        } catch (error) {
            res.status(500).json({ error: "Failed to log in", message: error.message });
        }

    }

}


module.exports = new AuthControllerAD();