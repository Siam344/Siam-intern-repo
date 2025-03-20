import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import ButtonComponent from './components/ButtonComponent';
import FormikForm from './components/FormikForm';
import UserList from './components/UserList';
import DataFetcher from './components/DataFetcher';
import i18n from './hooks/i18n'; // Importing i18n configuration
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    // Language Switcher
    const changeLanguage = useCallback((lng) => {
        i18n.changeLanguage(lng);
    }, []);

    return (
        <Router>
            <div className="text-center p-5">
                <h1 className="text-4xl font-bold mb-5">{t('welcome')}</h1>
                <nav className="flex justify-center gap-4 mb-5">
                    {['Home', 'Counter', 'Button', 'Form', 'User List', 'Data Fetcher'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md transform transition-all duration-200 hover:scale-110 hover:bg-blue-600"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="mb-5">
                    <button onClick={() => changeLanguage('en')} className="mx-1 bg-gray-300 text-black py-1 px-2 rounded-md">English</button>
                    <button onClick={() => changeLanguage('bn')} className="mx-1 bg-gray-300 text-black py-1 px-2 rounded-md">Bengali</button>
                </div>

                <Routes>
                    <Route path="/" element={<h2 className="text-2xl">{t('welcomeMessage')}</h2>} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/button" element={<ButtonComponent />} />
                    <Route path="/form" element={<FormikForm />} />
                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/data-fetcher" element={<DataFetcher />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
