module.exports = {
    apps: [
        {
            name: 'chatmiddle',
            port: '3021',
            exec_mode: 'cluster',
            instances: 'max',
            script: './chatmiddle/server/index.mjs'
        }
    ]
}