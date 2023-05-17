import { cssBundleHref } from "@remix-run/css-bundle";
import clsx from "clsx";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getUser, getSession, sessionStorage } from "~/session.server";
import stylesheet from "~/tailwind.css";
import themeStylesheet from "~/theme.css";
import { ThemeProvider, useTheme } from "./utils/theme-provider";
import Layout from "./components/Layout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: themeStylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request);
  const message = session.get("globalMessage");
  return json({ user: await getUser(request), message },
    {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session),
      },
    });
};

function Body() {
  const [theme] = useTheme();
  const { message } = useLoaderData<typeof loader>();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-[#f2f1f7]">
        <Layout>
          {message ? (
            <div className="absolute px-4 py-2 font-bold bg-cream border border-orange-700 flex justify-center"><p>{message}</p></div>
          ) : null}
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Body />
    </ThemeProvider>
  )
}
