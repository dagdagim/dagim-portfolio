// app/page.js — server shim that renders the client entry at ./pages/index.js
import Home from './pages/index';

export default function Page() {
  return <Home />;
}