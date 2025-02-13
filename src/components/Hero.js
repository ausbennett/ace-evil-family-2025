// components/Hero.js

import ScrollDownArrow from "./ScrollDownArrow";

export default function Hero({ onButtonClick }) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'var(--bg-color)',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: 'var(--text-color)' }}>Ace Evil Fam 2025</h1>
      <p style={{ color: 'var(--comment-color)', fontSize: '1.2rem' }}>
        Evil by blood, family by choice.
      </p>
      < ScrollDownArrow />
      <button onClick={onButtonClick} style={{ marginTop: '20px', borderRadius: '0.25rem'}}>Talent Show</button>
    </section>
  );
}
