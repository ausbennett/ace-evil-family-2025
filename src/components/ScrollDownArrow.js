"use client";

export default function ScrollDownArrow() {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-down-arrow" onClick={scrollToSection}>
      ⬇
      <style jsx>{`
        .scroll-down-arrow {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 2rem;
          color: var(--comment-color);
          animation: bounce 1.5s infinite;
          cursor: pointer;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }
      `}</style>
    </div>
  );
}

