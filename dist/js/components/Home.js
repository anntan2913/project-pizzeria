import { /*settings, */select, templates, /*classNames*/} from '../settings.js';
import utils from '../utils.js';

class Home{
  constructor(element) {
    const thisHome = this;
      
    thisHome.render(element);
    //thisHome.initWidgets(element);     
  }

  render(){
    const thisHome = this;
      
    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = document.querySelector(select.containerOf.home);
        
    /*create element using utils.createElementFromHTML */
    thisHome.element = utils.createDOMFromHTML(generatedHTML);

    /* find home container */
    const homeCon = document.querySelector(select.containerOf.home);

    /* add element to container */
    homeCon.appendChild(thisHome.element);    
  }
  /*
  initWidgets(){
    const thisHome = this;

    const elem = document.querySelector('carousel');
    const flkty = new Flickity(elem, {
      // options
      cellAlign: 'center',      
      wrapAround: true,
      autoPlay: true,
      freeScroll: true,
      contain: true,      
      imagesLoaded: true,
    });
  } 

  */

}

export default Home;