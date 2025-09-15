import React from "react";

export default function DescriptionFormatter({ text }) {
  // Séparer la description en deux parties : avant ":" et après
  const [beforeColon, ...afterColon] = text.split(":");

  // Si pas de ":", on renvoie le texte brut
  if (afterColon.length === 0) {
    return <p className="text-gray-700 leading-relaxed">{text}</p>;
  }

  // Récupérer le texte après les deux-points et le découper en lignes
  const afterText = afterColon.join(":");
  const lines = afterText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <div className="space-y-3">
      {/* Partie avant les deux points */}
      <p className="text-gray-800 font-medium">{beforeColon} :</p>

      {/* Partie après les deux points sous forme de liste */}
      <ul className="space-y-2 pl-4">
        {lines.map((line, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="w-3 h-3 mt-1 bg-green-500 rounded-full shrink-0" />
            <span className="text-gray-700 leading-relaxed">{line.replace(/^- /, "")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
