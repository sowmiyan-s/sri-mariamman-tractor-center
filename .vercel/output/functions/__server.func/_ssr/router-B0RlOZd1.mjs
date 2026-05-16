import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/PROJECTS/sri-mariamman-tractor-center-main/assets/styles-5G6CsY3I.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sri Mariamman Tractor Center" },
      {
        name: "description",
        content: "Trusted tractor sales, service and spare parts in Paramathi Velur, Namakkal — 25+ years of experience."
      },
      { name: "author", content: "Sri Mariamman Tractor Center" },
      { property: "og:site_name", content: "Sri Mariamman Tractor Center" },
      { property: "og:title", content: "Sri Mariamman Tractor Center" },
      {
        property: "og:description",
        content: "Trusted tractor sales, service and spare parts in Paramathi Velur, Namakkal — 25+ years of experience."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sri Mariamman Tractor Center" },
      {
        name: "twitter:description",
        content: "Trusted tractor sales, service and spare parts in Paramathi Velur, Namakkal — 25+ years of experience."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5480d355-6576-4bb7-bf3c-1b0568957340/id-preview-b6d37210--584d6547-7a61-4538-8c9b-d1b2aae799ea.lovable.app-1778596440055.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5480d355-6576-4bb7-bf3c-1b0568957340/id-preview-b6d37210--584d6547-7a61-4538-8c9b-d1b2aae799ea.lovable.app-1778596440055.png"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$1 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const PHONE_1 = "9443361295";
const MAPS = "https://maps.app.goo.gl/ie2L7h3c2tf3VtHn6";
const $$splitComponentImporter = () => import("./index-Caz0eVhb.mjs");
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Sri Mariamman Tractor Center",
  description: "Trusted tractor sales, brokerage, service, spare parts and agricultural equipment in Namakkal. 25+ years of experience, 1,000+ farmers served.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Road, Near G.H Hospital, N. Kandampalayam",
    addressLocality: "Paramathi Velur",
    addressRegion: "Tamil Nadu",
    postalCode: "637203",
    addressCountry: "IN"
  },
  telephone: ["+91-9443361295", "+91-9382334477"],
  priceRange: "₹₹",
  hasMap: MAPS,
  url: "https://srimariammantractor.in/",
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "19:00"
  }],
  areaServed: "Namakkal, Tamil Nadu",
  makesOffer: ["Mahindra 575 DI", "Mahindra 475 DI", "Tractor Sales", "Tractor Brokerage", "Tractor Service", "Genuine Spare Parts", "Rotavator", "Water Tanker"],
  sameAs: [`https://wa.me/91${PHONE_1}`]
};
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Sri Mariamman Tractor Center — Sales, Broker & Service, Namakkal"
    }, {
      name: "description",
      content: "25+ years of trusted Mahindra tractor sales, brokerage, servicing & spare parts in Paramathi Velur, Namakkal. 1,000+ farmers served. Mon–Fri 8am–7pm."
    }, {
      name: "keywords",
      content: "tractor service Namakkal, tractor broker Namakkal, Mahindra 575, Mahindra 475, Paramathi Velur, rotavator, water tanker, agricultural equipment Tamil Nadu"
    }, {
      name: "geo.region",
      content: "IN-TN"
    }, {
      name: "geo.placename",
      content: "Paramathi Velur, Namakkal"
    }, {
      property: "og:title",
      content: "Sri Mariamman Tractor Center — Namakkal"
    }, {
      property: "og:description",
      content: "25+ years · 1,000+ farmers served. Tractor sales, broker, service & spares in Paramathi Velur, Namakkal."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: "https://srimariammantractor.in/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(localBusinessSchema)
    }]
  })
});
const SitemapDotxmlRoute = Route$1.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  MAPS as M,
  PHONE_1 as P,
  router as r
};
