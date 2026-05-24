"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Props = {
  onEnter: () => void;
};

export default function Landing({
  onEnter
}: Props) {
  return (
    <main className="landing-shell">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.8
        }}
        className="landing-hero"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2,
            duration: 0.7
          }}
          className="landing-logo"
        >
          CT
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 24
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.35,
            duration: 0.7
          }}
        >
          Create With
          CTPRO.ai
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 24
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.45,
            duration: 0.7
          }}
        >
          AI Creative Production OS
          for cinematic image,
          motion, campaign,
          and commercial prompt
          intelligence.
        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
            y: 24
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.6,
            duration: 0.7
          }}
          onClick={onEnter}
          className="landing-cta"
        >
          <Sparkles size={18} />
          Create With CTPRO.ai
        </motion.button>
      </motion.div>
    </main>
  );
}
