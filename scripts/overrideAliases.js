const path = require(`path`);


const overrideAliases = (compiler) => {
  compiler.options.resolve.alias['@'] = path.join(__dirname, '/../src')
}

module.exports = overrideAliases