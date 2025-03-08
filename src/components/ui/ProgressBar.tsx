import { motion } from "motion/react";

interface ProgressBarProps {
  key?: number;
}

export default function ProgressBar({}: ProgressBarProps) {
  return (
    <div className="w-full h-2.5">
      <motion.div
        className="h-2.5 bg-accent mx-auto"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 8 }}
      ></motion.div>
    </div>
  );
}
