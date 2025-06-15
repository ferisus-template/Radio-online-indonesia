import './core.js';
import { initRouter } from './router.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

initRouter();
