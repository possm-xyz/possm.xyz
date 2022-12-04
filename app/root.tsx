import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/styles/App.css";

import { Header } from "~/components/Header/Header";
import { Footer } from "~/components/Footer/Footer";

export const links = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: 'icon', type: 'image/x-icon', href: '~/assets/images/favicon.ico' }
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "pOsSm /* Private Operating System & Social Media */",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="root">
          <Header />
          <Outlet />
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
