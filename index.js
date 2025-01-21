const { exec } = require('sudo-prompt')

const path = require('path')

const hostPath = path.join('C:\\Windows\\System32\\drivers\\etc\\hosts')

const options = {
    name: 'insert host'
}
/**
 * 
 * @param {string} ip 
 * @param {string} domain 
 * @returns {void}
 */
const insertHost = (ip, domain) => {
    exec(`powershell.exe -Command Add-Content -Path ${hostPath} -Value '${ip} ${domain}'`, options, (error, stdout, stderr) => {
        if (error) {
            return console.error('error:' + error)
        }
        if (stderr) {
            return console.error('stderr:' + stderr)
        }
        console.log(`${ip} ${domain} is added`)
    })
}
module.exports.insertHost = insertHost