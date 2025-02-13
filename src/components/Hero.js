"use client"

import { motion } from "framer-motion"
import ScrollDownArrow from "./ScrollDownArrow";

export default function Hero({ onButtonClick }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "var(--bg-color)",
        textAlign: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Floating Devil Emoji (Centered Above Text) */}
      <motion.div
        initial={{ y: 0, rotate: -5 }}
        animate={{ y: [0, -15, 0], rotate: [5, -5, 5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          fontSize: "5rem",
          position: "absolute",
          top: "20%", // Adjusted to sit above text
        }}
      >
        😈
      </motion.div>

      {/* Hero Content */}
      <h1 style={{ fontSize: "3rem", color: "var(--text-color)", marginTop: "5rem" }}>
        Ace Evil Fam 2025
      </h1>
      <p style={{ color: "var(--comment-color)", fontSize: "1.2rem" }}>
        Evil by blood, family by choice.
      </p>

      {/* Scroll Arrow */}
      <ScrollDownArrow />

      {/* Talent Show Button */}
      <button
        onClick={onButtonClick}
        style={{
          marginTop: "20px",
          borderRadius: "0.25rem",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Talent Show
      </button>
    </section>
  );
}
