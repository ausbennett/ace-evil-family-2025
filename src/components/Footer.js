
// components/Footer.js
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--current-line-color)',
        color: 'var(--text-color)',
        textAlign: 'center',
        padding: '20px 0',
      }}
    >
      <p>&copy; 2025 Ace Evil Fam. All Rights Reserved.</p>
      <p>
        <a href="/about" style={{ color: 'var(--cyan-color)', textDecoration: 'none' }}>
          About Us
        </a>
      </p>
    </footer>
  );
}
