// Short bell made with the Web Audio API (no audio file needed).
let ctx = null;

// Call from a click handler so the browser allows sound later.
export function unlockAudio() {
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
  } catch { /* sound is optional */ }
}

export function playAlarm() {
  try {
    unlockAudio();
    if (!ctx) return;
    [0, 0.55, 1.1].forEach((delay) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const start = ctx.currentTime + delay;
      osc.type = 'sine';
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.35, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.5);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.55);
    });
  } catch { /* sound is optional */ }
}
