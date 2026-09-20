import { Outlet } from 'react-router-dom';

export default function ServicesLayout() {
    return (
        <div className="services-page-wrapper">
            <Outlet />
        </div>
    );
}