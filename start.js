var shell = require('shelljs');

shell.exec('babel . --watch --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline', { async: true });
