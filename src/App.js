import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='http://mp.metapoznanie.ru/img/mp21.bmp'></img>
            </header>
            <nav className='nav'>
                <div>
                    <a href=''>Profile</a>
                </div>
                <div>
                    <a href=''>Messages</a>
                </div>
                <div>
                    <a href=''>News</a>
                </div>
                <div>
                    <a href=''>Music</a>
                </div>
                <div>
                    <a href=''>Settings</a>
                </div>
                <div>
                    <a href=''>Profile</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                <img src='https://cdn.pixabay.com/photo/2019/10/02/00/41/lake-4519623_960_720.jpg'></img>
                </div>
                <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5T9mDfy0eWJY8jKLwofob7cPJiKGDLGEy_hJPdVGRki0Y5PMa6g'></img>
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        New post 1
                    </div>
                    <div>
                        New post 2
                    </div>
                </div>

            </div>
            <footer className='footer'></footer>
        </div>
    );
};

export default App;
