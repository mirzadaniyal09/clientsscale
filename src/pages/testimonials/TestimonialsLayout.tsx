import { Outlet } from 'react-router-dom';

export default function TestimonialsLayout() {
    return (
        <main className="section">
            <div className="container">
                <Outlet />
            </div>
        </main>
    );
}
