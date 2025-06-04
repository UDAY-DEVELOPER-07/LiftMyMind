// // App.tsx
// import { Routes, Route } from 'react-router-dom';
// import Home from './home/Page';
// import About from './About/Page';
// import Contact from './whatwedo.tsx/Page';
// import GooeyNav from './components/ui/Nav';

// const items = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];

// function App() {
//   return (
//     <>
//       <div style={{ height: '600px', position: 'relative' }}>
//         <GooeyNav items={items} />
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
// main.tsx or index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from './home/Page';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </React.StrictMode>
);

