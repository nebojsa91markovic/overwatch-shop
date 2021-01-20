import BackgroundVideo from "./Components/BackgroundVideo/BackgroundVideo";
import Heroes from "./Components/Heroes/Heroes";
import HeroesHeader from "./Components/HeroesHeader/HeroesHeader";
import NavBar from "./Components/NavBar/NavBar";
import HeroVideo from "./Components/HeroVideo/HeroVideo";
import Copyright from "./Components/Copyright/Copyright";
import Cart from "./Components/Cart/Cart";
import React, { useState } from "react";
import store from "./Store/Store";
function App() {
  const [isStory, setIsStory] = useState(false);

  const initialHero = {
    id: 0,
    name: "ana",
    role: "support",
    fullName: "Ana Amari, Age: 60",
    occupation: "Bounty Hunter",
    baseOfOperations: "Cairo, Egypt",
    affiliation: "Overwatch (formerly)",
    quote: "Everyone must find their cause.",
    biography: `One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for. As the Omnic Crisis inflicted a heavy toll on Egypt, the country's depleted and undermanned security forces relied on elite snipers for support. Among them was Ana Amari, who was widely considered to be the world's best. Her superior marksmanship, decision-making, and instincts made her a natural selection to join the Overwatch strike team that would end the war. Following the success of Overwatch's original mission, Ana served for many years as Strike Commander Morrison's second-in-command. Despite her responsibilities in leading the organization, Ana refused to step away from combat operations. She remained on active duty well into her fifties, until she was believed to have been killed during a hostage rescue mission by the Talon operative known as Widowmaker. In truth, Ana survived that encounter, despite being gravely wounded and losing her right eye. During her recovery, she wrestled with the weight of a life spent in combat, and she chose to stay out of the world's growing conflicts. However, as time passed, she realized she could not sit on the sidelines while people threatened her city and the innocents around her. Now, Ana has rejoined the fight to protect her country from the forces that would destabilize it, and most importantly, to keep her family and her closest allies safe.`,
    figures: [{ name: "ana-figure", price: 9.99 }],
  };

  const [activeHero, setActiveHero] = useState(initialHero);

  const buttonStyle = {
    zIndex: "9999",
  };

  const getHero = (id) => {
    const allHeroes = store.getState();
    const hero = allHeroes.filter((hero) => hero.id === id)[0];
    setActiveHero(() => hero);
  };

  return (
    <div className="App">
      <NavBar />
      <BackgroundVideo />
      <HeroesHeader />

      <Heroes
        activeHero={activeHero}
        setActiveHero={setActiveHero}
        getHero={getHero}
      />

      {/* <HeroIconWrapper /> */}
      <HeroVideo
        activeHero={activeHero}
        isStory={isStory}
        setIsStory={setIsStory}
      />
      <Copyright />
      <button style={buttonStyle}> My Cart</button>
      <Cart />
    </div>
  );
}

export default App;
