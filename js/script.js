import ScrollSuave from './modules/scroll-suave.js';
import initScrollSite from './modules/scroll-animacao.js';
import Accordion from './modules/accordion-list.js';
import initTab from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchNumeros from './modules/fetch-animais.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt', '[data-anime="accordion"] dd')
accordion.init();




initMenuMobile();
initScrollSite();

initTab();
initModal();
initTooltip();
initDropdownMenu();
initFuncionamento();
initFetchNumeros();