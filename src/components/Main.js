import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import heroImage from '../icons_assets/restauranfood.jpg';
import greekSalad from '../icons_assets/greek salad.jpg';
import bruschetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';
import ownersA from '../icons_assets/Mario and Adrian A.jpg';
import ownersB from '../icons_assets/Mario and Adrian b.jpg';
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from './bookingTimes';

const specials = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    image: greekSalad,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.',
  },
  {
    title: 'Bruschetta',
    price: '$5.99',
    image: bruschetta,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    image: lemonDessert,
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 id="hero-title">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served
              with a modern twist.
            </p>
            <div className="hero-actions">
              <a href="/reservations">Reserve a Table</a>
              <a href="/order">Order Online</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Freshly prepared bruschetta" />
          </div>
        </div>
      </section>

      <section className="specials" aria-labelledby="specials-title">
        <div className="section-header">
          <h2 id="specials-title">This week&apos;s specials!</h2>
          <a href="/order">Online Menu</a>
        </div>
        <div className="specials-grid">
          {specials.map((item) => (
            <article key={item.title} className="special-card">
              <img src={item.image} alt={item.title} />
              <div className="special-card-header">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
              <a href="/order">Order a delivery</a>
            </article>
          ))}
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about-content">
          <h2 id="about-title">Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic
            cocktails in a lively but casual environment. The restaurant features a locally sourced
            menu with daily specials.
          </p>
        </div>
        <div className="about-images">
          <img src={ownersA} alt="Mario and Adrian preparing food" />
          <img src={ownersB} alt="Mario and Adrian smiling" />
        </div>
      </section>
    </>
  );
}

function Placeholder({ title, description }) {
  return (
    <section className="page" aria-labelledby={`${title}-title`}>
      <h1 id={`${title}-title`}>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function Main() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Placeholder
              title="About"
              description="Learn more about the Little Lemon story, our chefs, and what inspires our menu."
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Placeholder
              title="Menu"
              description="Browse our seasonal Mediterranean menu, packed with fresh ingredients and vibrant flavors."
            />
          }
        />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
            />
          }
        />
        <Route
          path="/order"
          element={
            <Placeholder
              title="Order Online"
              description="Order Little Lemon favorites for pickup or delivery."
            />
          }
        />
        <Route
          path="/login"
          element={
            <Placeholder
              title="Login"
              description="Sign in to manage your reservations and saved orders."
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
