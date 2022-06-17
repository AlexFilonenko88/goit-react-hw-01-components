import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(<App />, document.querySelector('#root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

///

// const data = {
//     "id": "id-1",
//     "url": "https://354651-cf73031.tmweb.ru/wp-content/uploads/2020/10/krepost-oreshek.jpg",
//     "title": "Feathers. Art abstract",
//     "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     "quantity": 10,
//   };

// function Painting(props) {
//   const { url, title, autor, profileUrl, price } = props;

//   return (
//     <div>
//     <img src={url} alt={title} width="480" />
//     <h2>{title}</h2>
//     <p>
//       Автор: <a href={profileUrl}>{autor}</a>
//     </p>
//     <p>Цена: {price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
//   )
// }

// ReactDOM.render(
//   <Painting
//     url={data.url} //user.url
//     title={data.title}
//     autor={data.author.tag}
//     profileUrl={data.author.url}
//     price={data.price}
//   />, document.querySelector('#root'));
