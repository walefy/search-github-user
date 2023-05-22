import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="text-sm md:text-base bg-opacity-20 rounded-lg p-4 bg-gray-300 text-gray-600 shadow-lg">{ children }</div>
}