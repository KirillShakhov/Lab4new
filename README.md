# Web.Lab4

![pic](https://github.com/KirillShakhov/Lab4new/blob/main/img/task.jpg)
![pic](https://github.com/KirillShakhov/Lab4new/blob/main/img/pic.jpg)

____
**Вопросы к защите лабораторной работы:**
1. Платформа Java EE. Спецификации и их реализации.
1. Принципы IoC, CDI и Location Transpanency. Компоненты и контейнеры.
1. Управление жизненным циклом компонентов. Дескрипторы развёртывания.
1. Java EE API. Виды компонентов. Профили платформы Java EE.
1. Компоненты EJB. Stateless & Stateful Session Beans. EJB Lite и EJB Full.
1. Работа с электронной почтой в Java EE. JavaMail API.
1. JMS. Реализация очередей сообщений. Способы доставки сообщений до клиента. Message-Driven Beans.
1. Понятие транзакции. Управление транзакциями в Java EE. JTA.
1. Веб-сервисы. Технологии JAX-RS и JAX-WS.
1. Платформа Spring. Сходства и отличия с Java EE.
1. Модули Spring. Архитектура Spring Runtime. Spring Security и Spring Data.
1. Реализация IoC и CDI в Spring. Сходства и отличия с Java EE.
1. Реализация REST API в Java EE и Spring.
1. React JS. Архитектура и основные принципы разработки приложений.
1. Компоненты React. State & props. "Умные" и "глупые" компоненты.
1. Разметка страниц в React-приложениях. JSX.
1. Навигация в React-приложениях. ReactRouter.
1. Управление состоянием интерфейса. Redux.
1. Angular: архитектура и основные принципы разработки приложений.
1. Angular: модули, компоненты, сервисы и DI.
1. Angular: шаблоны страниц, жизненный цикл компонентов, подключение CSS.
1. Angular: клиент-серверное взаимодействие, создание, отправка и валидация данных форм.



## Как задеплоить лабу?(WildFly)

1. Установка [WildFly](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#установка-wildfly-на-helios)
1. [Деплой](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#deployment) лабы
1. [Проброс портов](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#проброс-портов) для гелиоса
1. Запуск в [фоновом режиме](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#запуск-в-фоне)
1. Установка вашего [portbase](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/install-wildfly.md#установка-portbase)
1. Установка [datasource](https://github.com/KirillShakhov/Web.Lab2/blob/main/guides/set-wildfly-datasource.md)


## Как задеплоить лабу?(glassfish)

1. Создаём домен для лабы:
`$ asadmin create-domain --domaindir ~/glass --portbase 41414 lab2`
где:
    * `~/glass` -- путь до каталога, где вы хотите разместить свою лабу;
    * `41414` - число, от которого будут отсчитываться номера портов созданного домена. Проявите фантазию в выборе, чтоб не пересечься с другими студентами;
    * `lab2` - название католога для веб-приложения (лабы).

    Сервер будет сконфигурирован. Заскриньте терминал: эти данные вам ещё понадобятся. Примерный вывод:
```
Using port 41462 for Admin.
Using port 41494 for HTTP Instance.
Using port 41490 for JMS.
Using port 41451 for IIOP.
Using port 41495 for HTTP_SSL.
Using port 41452 for IIOP_SSL.
Using port 41453 for IIOP_MUTUALAUTH.
Using port 41500 for JMX_ADMIN.
Using port 41480 for OSGI_SHELL.
Using port 41423 for JAVA_DEBUGGER.
```
2. Запускаем созданный домен:
`$ asadmin start-domain --domaindir ~/glass lab2`
(проверить его статус можно командой: `$ asadmin list-domains --domaindir ~/glass`)
3. Так-как домены Glassfish недоступны снаружи, то необходимо пробросить порты через SSH-туннель. Заходим в консоль с своей машины и вводим:
`ssh -fNL 41462:127.0.0.1:41462 имяПользователяр@se.ifmo.ru -p 2222`
После этого заходим на [127.0.0.1:41462] в браузере - должна отобразиться страница с приветствием Glassfish.
4. Логинимся, деплоим приложение на вкладке **application** и пробрасывет порт для него (повторить пункт 3 с портом HTTP Instance).

Другие команды:
`$ asadmin stop-domain --domaindir ~/glass lab2` - остановить домен
`$ asadmin delete-domain --domaindir ~/glass lab2` - удалить домен
