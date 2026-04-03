// ─── Feature Flags ────────────────────────────────────────────────────────────
// Defaults are used locally and as fallback.
// Override any flag via Vercel Environment Variables (Settings → Environment Variables).
// After changing a variable in Vercel, trigger a Redeploy — no code push needed.
//
// Vercel env var names:
//   VITE_SHOW_RESUME, VITE_SHOW_PROJECTS, VITE_SHOW_EXPERIENCE, VITE_SHOW_SKILLS
//   VITE_HIDE_PROJECTS  (comma-separated project names, e.g. "Dungeon Delve,Leasing Emailer")

function envBool(key, defaultValue) {
  const val = import.meta.env[key];
  if (val === undefined || val === '') return defaultValue;
  return val !== 'false';
}

export const features = {
  showResume:     envBool('VITE_SHOW_RESUME',     true),
  showProjects:   envBool('VITE_SHOW_PROJECTS',   true),
  showExperience: envBool('VITE_SHOW_EXPERIENCE', true),
  showSkills:     envBool('VITE_SHOW_SKILLS',     true),
};

// Projects listed here (comma-separated) will be hidden.
// e.g. VITE_HIDE_PROJECTS="Dungeon Delve,Leasing Emailer"
const hiddenProjects = (import.meta.env.VITE_HIDE_PROJECTS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

export const projectVisibility = {
  'Priority Matrix': !hiddenProjects.includes('Priority Matrix'),
  'Leasing Emailer': !hiddenProjects.includes('Leasing Emailer'),
  'Dungeon Delve':   !hiddenProjects.includes('Dungeon Delve'),
};
