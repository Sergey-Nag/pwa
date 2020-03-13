// Перечисление зависимостей:
var path = require('path');
var express = require('express');

// Описание настроек:
var staticSiteOptions = {
   portnum: 80, // слушать порт 80
//   maxAge: 60 * 10 //10 сек. - 1000 * 60 * 15 хранить страницы в кэше пятнадцать минут
};

// Запуск сайта:
express().use(express.static(
   path.join(__dirname, 'static'),
   staticSiteOptions
)).listen(staticSiteOptions.portnum);

console.log('Start on port: '+staticSiteOptions.portnum+'\n');