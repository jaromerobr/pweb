
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login.jsx';
import NotFound from '../pages/NotFound.jsx';
import DashboardPage from '../pages/Dashboard.jsx';
import RegisterPage from '../pages/Register.jsx';
import HomePage from '../pages/home.jsx';

function RouterPage() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/ingreso" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    );

}
export default RouterPage;

