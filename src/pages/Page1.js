import BannerConstructor from "../components/Banner/BannerConstructor";
import { Banner } from "../components/Banner/Banner";
import { Spacer } from "../helper/Spacer";
import { ProductCarusel } from "../components/Carusel/ProductCarusel";
import { items } from "../data";
import { ComponentEdit } from '../components/ComponentEdit/ComponentEdit';


const Page1 = () => {
  const customData = {
    height: 'auto',
    width: 100,
    direction: 'rtl',
    contentPadding: 40,
    image: "https://i.postimg.cc/59B3wctT/lodowka-2.png",
    imageAlt: "Lodowka turystyczna",
    imagePosition: "cc",
    htmlContent: '<h4><span class="badge">New</span></h4><h1>New Perfect Fridge For Your NEXT TRIP</h1><p>Lod&oacute;weczka w bardzo przystępnej cenie, wygodna i z długim kablem ( 2metry). Dodatkowo posiada r&oacute;wnież funkcję grzania! Chłodzi bardzo dobrze. Polecam.<br><br></p><p><span class="btn-primary"><a href="page2">Kup teraz</a></span></p>'
  };
  

  return (
    <>
    <h1>Komponent do edytowania zawartośći:</h1>
      <ComponentEdit customData={customData} Constructor={BannerConstructor} ViewComponent={Banner} />
      <Spacer size={100} />
      <h1>Komponent karuzela produktów:</h1>
      <ProductCarusel items={items} />
    </>
  );
};

export default Page1;