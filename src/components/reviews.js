import React, { Component } from 'react';
import Slider from "react-slick";
import { FiHeart } from 'react-icons/fi';
import '../styles/slick.css';
import '../styles/slick-theme.css';
import Review from './review';
 
class Reviews extends Component {

  render() {
    var settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      easing: 'linear',
      infinite: true,
      pauseOnHover: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1, 
    };

    return (
      <div className="px-6 py-12 bg-pastel sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
        <h2 className="flex flex-col justify-center mb-3 text-center md:flex-row md:mb-6">
            <div className="inline md:hidden">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 text-4xl bg-white rounded-full text-brown">
                <FiHeart />
              </div>
            </div>
            <FiHeart className="hidden mr-4 md:inline"/> Avis des clientes
          </h2>
          <Slider {...settings}>
            <Review 
              text="“Après des années de boycott des salons de coiffure, j'ai enfin trouvé la perle rare à Lyon : Camilia Coiffure ! Je fais confiance à Marine les yeux fermés pour mes cheveux. On voit qu'elle est passionnée par son sujet et qu'elle le maîtrise. Un professionnalisme à toute épreuve :)”"
              author="Sophie B."
              link="https://goo.gl/maps/d9qqJUVBVEkBDZP47"
              source="Google"  
            />
            <Review 
              text="“Quel professionnalisme ! J’ai rarement vu des coiffeurs vous conseiller aussi bien. Elle connaît vraiment bien les cheveux, vous donne des conseils avant, pendant et après la coiffure... Accueil chaleureux et résultat qui pour une fois correspond à 100% à ce que j’attendais... Merci encore et je la recommande vivement...”"
              author="Helene F."
              link="https://www.facebook.com/helene.fabryoval/posts/10214878589814728"
              source="Facebook"
            />
            <Review
              text="“Je recommande fortement ! J'ai des cheveux épais et bouclés difficile à travailler ! Cette coiffeuse est très professionnelle elle a le soucis de bien faire de plus elle est douée on sent la grande expérience... J'ai sans aucun doute trouvée une coiffeuse qui sait être à l'écoute et dynamique.. Le salon est joliment décorée zen et stylé... C'est les yeux fermés que je lui confie mes cheveux. Good job!”"
              author="Wolf"
              link="https://goo.gl/maps/u61qZtDsqiovum7J6"
              source="Google"
            />
            <Review
              text="“Son travail est très perfectionniste, je n'ai jamais été déçu des résultats !! Je la recommande sans aucune hésitation. Elle est adorable et prend soins de ses clientes”"
              author="Marine L."
              link="https://www.facebook.com/marinelasckowiez/posts/10212461648571028"
              source="Facebook"
            />
            <Review
              text="“Une prestation de grande qualité, le résultat est assuré! L'ambiance est chaleureuse et conviviale. Le personnel est très professionnel, dynamique, dévoué et soucieux de comprendre les clients et de les satisfaire! Je recommande vous ne trouverez pas mieux à Lyon!”"
              author="Kayanne C."
              link="https://goo.gl/maps/ktuApBMPtreu4gJN9"
              source="Google"
            />
            <Review
              text="“Très professionnelle et honnête, elle m’a conseillé par rapport à mes cheveux et leur santé. Ça aurait été un autre salon il m’aurait fait la prestation sans me prévenir de l’état catastrophique de mes cheveux. Merci encore, à dans 2 mois.”"
              author="Gi Gi"
              link="https://www.facebook.com/aljia.aissaoui/posts/2335364619807902"
              source="Facebook"
            />
          </Slider>
        </div>
      </div>
    );
  }
}
export default Reviews;