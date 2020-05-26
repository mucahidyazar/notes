var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ["@babel/polyfill","./src/index.js"],
    //Webpacke srcnin altindaki index.js ye bak diyoruz
    //Ve webpackde async await yapisini kullanabilmek icinde
    //babel/polyfill yapisini yaziyoruz basina.

    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'bundle.js'
    },
    //Webpack index.js ye baktiktan sonra burada output yani ciksi yapmasi gerekiyor
    //path kisminda bundles seklinde klasorumuzu olusturacagiz
    //filename kismindada bundles klasorumuzun icinde
    //webpackin bagladigi bundle.js dosyamizi olusturucagiz.
    mode: "development",
    
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
//Burada babel a bagli olan babelloaderi webpackimizede bagliyoruz
//Boylelikle webpack babyloader'a, babyloader babel'a baglaniyor

                options: {

//Ve babel-cli islemini webpack buradaki presets'e gore yapacak.
                  presets: ["@babel/preset-env"]
                }
              }
            }
          ]
    }
};