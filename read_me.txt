Устанавливаем node.js

ищем в гугле create-react-app
находим в гитхабе https://github.com/facebook/create-react-app
создаем папку проекта, переходим в нее
cd C:\cborka

npx create-react-app react-kabzda-1
cd react-kabzda-1
npm start

19 урок
npm install react-router-dom -save



1. Добавить структуру данных
2. Добавить константы для dispatch
3. Добавить логику для каждой константы dispath
4. Создать ActionCreator для каждой константы dispath

идем делать UI
5. Рисуем компонетны
6. Создаем обработчики OnClick OnChange и отображение value
7. Прокидываем колбэки функций логики BLL.


DDD почитать эту книгу

Разработка странички
1. Сделать ссылку (Navbar)
2. Сделать роут (App) и отрисовать заготовку
3. Создать каталог для странички, внутри него создать файл x.jsx xContainer.js x.module.css
4. Создать файл redux/x-reduser.js, накидать примерный initial_state, создать функцию xReduser, функции ActionCreators
5. Добавить xReduser в список редьюсеров для функции создания хранилища createStore
6. Сделать заготовки функций в xContainer.js
   const xContainer = connect(mapStateToProps, mapDispatchToProps)(x);
   и т.д.
7. Нарисовать разметку и действия в x.jsx, по ходу дела формировать нужные пропсы, функции диспатч в xContainer.js

