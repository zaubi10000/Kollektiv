import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [reflection, setReflection] = useState("");

  const analyzeFrequency = (text) => {
    const lowered = text.toLowerCase();
    if (lowered.includes("angst")) {
      return "Du bewegst dich im Feld der Angst. Sie will nicht bekämpft, sondern gefühlt werden.";
    } else if (lowered.includes("wut")) {
      return "Wut ist oft ein Schleier für Schmerz. Was liegt darunter?";
    } else if (lowered.includes("kontrolle")) {
      return "Kontrolle entsteht oft aus einem verletzten Vertrauen. Vertraust du dir selbst?";
    } else if (lowered.includes("klar")) {
      return "Klarheit schwingt in dir. Jetzt ist die Zeit, sie in Handlung zu verwandeln.";
    } else if (lowered.includes("machtlos")) {
      return "Machtlosigkeit ist ein altes Muster. Deine Präsenz verändert mehr, als du denkst.";
    } else {
      return "Tiefe spiegelt sich nur, wenn du echt wirst. Was ist deine ungefilterte Wahrheit?";
    }
  };

  const handleSubmit = () => {
    const result = analyzeFrequency(input);
    setReflection(result);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>KOLLEKTIV</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Frequenzspiegel für dein Feld</p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Was bewegt dich gerade? Sprich ehrlich."
        style={{ width: '100%', minHeight: 100, padding: 10 }}
      />
      <button onClick={handleSubmit} style={{ width: '100%', marginTop: 10 }}>
        Frequenz analysieren
      </button>

      {reflection && (
        <div style={{ marginTop: 20, padding: 10, backgroundColor: '#f4f4f4' }}>
          <p>{reflection}</p>
        </div>
      )}
    </div>
  );
}

export default App;