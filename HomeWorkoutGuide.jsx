import { useState } from "react";

const exercises = [
  {
    day: "Day 1",
    name: "Jump Squat",
    gif: "https://tse2.mm.bing.net/th/id/OIP.GmGZAQf6IStyq1hc7ctpewHaGL",
    tips: "Start with feet hip-width apart, squat down, and jump up explosively. Land softly and repeat."
  },
  {
    day: "Day 1",
    name: "Push-Up to Shoulder Tap",
    gif: "https://tse4.mm.bing.net/th/id/OIP.LeSNYCZ4znmnc02PFGmJhgHaHa",
    tips: "Perform a push-up, then tap your opposite shoulder at the top. Keep core tight and avoid hips rocking."
  },
  {
    day: "Day 1",
    name: "Plank",
    gif: "https://tse3.mm.bing.net/th/id/OIP.vnkbzUy_iMKWET0E9kLkdAHaEp",
    tips: "Hold a straight line from head to heels, shoulders over wrists, abs engaged."
  }
];

export default function HomeWorkoutGuide() {
  const [selectedDay, setSelectedDay] = useState("Day 1");
  const filteredExercises = exercises.filter(ex => ex.day === selectedDay);
  const days = [...new Set(exercises.map(ex => ex.day))];

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Home Workout Visual Guide</h1>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {days.map(day => (
          <button
            key={day}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '1rem',
              border: '1px solid #000',
              backgroundColor: selectedDay === day ? '#000' : '#fff',
              color: selectedDay === day ? '#fff' : '#000',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredExercises.map((ex, index) => (
          <div key={index} style={{ borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', padding: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{ex.name}</h2>
            <img src={ex.gif} alt={ex.name} style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '0.5rem' }} />
            <p>{ex.tips}</p>
          </div>
        ))}
      </div>
    </div>
  );
}