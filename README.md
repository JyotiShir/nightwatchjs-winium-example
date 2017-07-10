Автотест для калькулятора на Nightwatch.js / Winium
============================
## Установка

### Nightwatch.js
Устанавливаем [Node.js](https://nodejs.org/) и пакет `nightwatch` командой `npm install nightwatch -g`. Подробнее смотри [на официальном сайте](http://nightwatchjs.org/gettingstarted).

### WevDriver
Скачиваем и распаковываем [Winium.Desktop](https://github.com/2gis/Winium.Desktop/releases). Запускаем с параметрами `--url-base=wd/hub --verbose`.

### Инструменты для определения элементов
Скачиваем [Windows Software Development Kit for Windows 8.1](https://developer.microsoft.com/en-us/windows/downloads/windows-8-1-sdk) (ставится и на Windows 7). Из features отмечаем только первую, `Windows Software Development Kit`.

Устанавливаем, заходим в `%PROGRAMFILES(X86)%\Windows Kits\8.1\bin\<ваша архитектура>`. Запускаем `UIAVerify` из папки или `inspect.exe` (простой и быстрый, рекомендуется).

## Запуск

Достаточно склонировать и запустить из директории командой `nightwatch`.

При необходимости удалённого тестирования поменять адрес машины с веб-драйвером в `nightwatch.json` (`test_settings`/`default`/`selenium_host`).

**Внимание!** Работает корректно только в русифицированной системе, т.к. сделаны примеры локаторов по названиям на русском. Подробнее смотри в `pages/main_window.js`.

После выполнения в папке генерируется HTML-отчёт о тестировании `report.html`.

## Материалы

Немного устаревшая статья про Winium: https://habrahabr.ru/company/2gis/blog/263347/