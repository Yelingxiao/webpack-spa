const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const files = fs.readdirSync(path.join(__dirname, './src'))
let entry = {}
let page = []
files.forEach(key => {
  entry[key] = path.join(__dirname, 'src/' + key + '/index.js')
})

files.forEach(key => {
  page.push(new HtmlWebpackPlugin({
    filename: `${key}.html`,
    template: path.join(__dirname, 'src/' + key + '/index.js'),
    chunks: [`${key}`]
  }))
})

module.exports = {
  entry,
  page
}
