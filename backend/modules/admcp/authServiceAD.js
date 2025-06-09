const ldap = require("ldapjs");
const testing = require("./testing-folder/authControllerAD-test.js");

class AuthServiceAD {

    async loginWithCredentials(ldapURL, bindDN, bindPassword) {

        const client = ldap.createClient({
            url: ldapURL,
            timeout: 5000,
            connectTimeout: 5000
        });

        client.on('error', (err) => {
            console.error('LDAP Connection Error:', err.message);
        });

        return new Promise((resolve, reject) => {
            client.bind(bindDN, bindPassword, (err) => {
                if (err) {
                    client.unbind();
                    reject(new Error('LDAP bind error: ' + err.message));
                } else {
                    client.unbind();
                    resolve({ message: "Bind successfull" });
                }
            });
        });

    }
}

module.exports = new AuthServiceAD();

