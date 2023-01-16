module.exports = {
    apps: [
        {
            name: 'StarsPage',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                "PORT": 8098,
                "HOST": "0.0.0.0"
            }
        }
    ]
}
