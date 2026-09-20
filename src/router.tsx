import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import PageLoader from './components/layout/PageLoader';
import { services } from './data/services';

const Home = lazy(() => import('./pages/Home/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const CTA = lazy(() => import('./pages/CTA/CTA'));
const GetQuotePage = lazy(() => import('./pages/GetQuote'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// Company & extra pages
const OurClients = lazy(() => import('./pages/Company/OurClients'));
const OurTeam = lazy(() => import('./pages/Company/OurTeam'));
const Faqs = lazy(() => import('./pages/Company/Faqs'));
const Pricing = lazy(() => import('./pages/Company/Pricing'));
const TestimonialsPage = lazy(() => import('./pages/testimonials/Testimonials'));
const AboutPage = lazy(() => import('./pages/About'));

const ServicesLayout = lazy(() => import('./pages/services/ServicesLayout'));
const ServicesList = lazy(() => import('./pages/services/ServicesList'));

/*
|--------------------------------------------------------------------------
| Generate service routes directly from services.ts
|--------------------------------------------------------------------------
|
| Every service must have:
|
| slug: 'example-slug'
|
| and a matching file:
|
| pages/services/example-slug.tsx
|
*/
const serviceRoutes = services.map((service) => ({
  path: service.slug,

  lazy: async () => {
    const component = await import(`./pages/services/${service.slug}.tsx`);

    return {
      Component: component.default,
    };
  },
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      // =========================================================
      // HOME
      // =========================================================
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },

      // =========================================================
      // SERVICES
      // =========================================================
      {
        path: 'services',

        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesLayout />
          </Suspense>
        ),

        children: [
          // All Services
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <ServicesList />
              </Suspense>
            ),
          },

          // Individual Services
          ...serviceRoutes,
        ],
      },

      // =========================================================
      // PORTFOLIO
      // =========================================================
      {
        path: 'portfolio',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Portfolio />
          </Suspense>
        ),
      },

      // =========================================================
      // TESTIMONIALS
      // =========================================================
      {
        path: 'testimonials',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TestimonialsPage />
          </Suspense>
        ),
      },

      // =========================================================
      // COMPANY PAGES
      // =========================================================
      {
        path: 'our-clients',
        element: (
          <Suspense fallback={<PageLoader />}>
            <OurClients />
          </Suspense>
        ),
      },
      {
        path: 'our-team',
        element: (
          <Suspense fallback={<PageLoader />}>
            <OurTeam />
          </Suspense>
        ),
      },
      {
        path: 'faqs',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Faqs />
          </Suspense>
        ),
      },
      {
        path: 'pricing',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Pricing />
          </Suspense>
        ),
      },

      // ABOUT
      {
        path: 'about-us',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },

      // =========================================================
      // CONTACT
      // =========================================================
      {
        path: 'contact-us',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },

      // =========================================================
      // GET FREE QUOTE
      // =========================================================
      {
        path: 'contact-us',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },

      // =========================================================
      // 404
      // =========================================================
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}