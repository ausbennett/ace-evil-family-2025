
// components/FeatureCards.js
export default function FeatureCards() {
  const features = [
    { title: 'Fast', description: 'Experience fast performance and smooth transitions.' },
    { title: 'Secure', description: 'All your data is protected with top-notch security.' },
    { title: 'Reliable', description: 'Always available, always on. Count on us.' },
  ];

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'var(--current-line-color)',
        padding: '40px',
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'var(--bg-color)',
            padding: '20px',
            borderRadius: '8px',
            width: '30%',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
          }}
        >
          <h2 style={{ color: 'var(--text-color)', marginBottom: '10px' }}>{feature.title}</h2>
          <p style={{ color: 'var(--comment-color)' }}>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
