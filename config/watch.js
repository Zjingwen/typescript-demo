const glob = require('glob');
const shell = require('shelljs');
const chokidar = require('chokidar');

const options = {
  cwd: './ts',
};

const files = glob.sync('*.ts', options).map(v=> `./ts/${v}`);
const watcher = chokidar.watch(files,{
  persistent: true,
});
const command = ()=> shell.exec('npm run ts');

watcher
  .on('add', () => command())
  .on('change', () => command())
  .on('unlink', () => command());