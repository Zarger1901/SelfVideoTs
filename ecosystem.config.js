module.exports = {
    apps: [
        {
            name: 'web-app',
            script: './build/server.js',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
            env_production: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
        },
    ],
}