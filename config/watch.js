const shell = require('shelljs');
const chokidar = require('chokidar');

const watcher = chokidar.watch('./ts',{
  persistent: true,
});
const command = ()=> shell.exec('npm run ts');

watcher
  .on('all', () => command());