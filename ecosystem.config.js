module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.'
  }, {
    // script: './service-worker/',
    // watch: ['./service-worker'],
    restart : 'always'
  }],

  deploy : {
    production : {
      user : 'Delta',
      host : '192.168.0.51',
      ref  : 'origin/master',
      repo : 'https://github.com/krunal1Solanki/PM2Test',
      path : '/Users/delta/test',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
