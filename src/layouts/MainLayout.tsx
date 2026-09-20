import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
  const location = useLocation();
  const isServices = location.pathname.startsWith('/services');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* When on services pages we add a wrapper that disables the centered .container layout
            so service pages can use full-width layouts. */}
        <div className={isServices ? 'service-root' : ''}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
