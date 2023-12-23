## Описание

Данный проект это чат, в котором в будущем будут реализованы функции по скидыванию фотографий, локации, файлов, регистрации, авторизации, изменения данных о себе в профиле.

## Статус

В разработке, первый спринт.

## Команды

1. `node src/server/index.cjs` - перед запуском проекта для грамотного изображения фотографий библиотекой Handlebars необходимо прописать эту команду. Данная команда запускает Express сервер, который позволияет библиотеке получить доступ к статичным файлам.
2. `npm run dev` - запуск проекта в режиме разработки.
3. `npm run build` - сборка проекта.
4. `npm run start` - сборка и запуск проекта.

## Дизайн

Ссылка на дизайн, который был взят за основу - https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1&mode=dev

## Ссылка

Ссылка на задеплоенный проект - https://main--classy-quokka-e30016.netlify.app/

## Изменения (22.12.2023)

1. Сверстаны все страницы
2. Дизайн поделен на обособленные компоненты
3. Настроен сервер Express для раздачи статики
4. Проект собирается при помощи Vite
5. Компоненты и страницы сверстаны при помощи шаблонизатора Handlebars
