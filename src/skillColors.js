export const skillColors = {
  // Languages
  'Python':           '#3776ab',
  'Java':             '#f89820',
  'C':                '#a8b9cc',
  'C++':              '#00599c',
  'SQL':              '#e38c00',
  'JavaScript':       '#f7df1e',
  'TypeScript':       '#3178c6',
  'HTML':             '#e34f26',
  'CSS':              '#1572b6',
  'RegEx':            '#a78bfa',
  // Frameworks
  'React':            '#61dafb',
  'Spring Boot':      '#6bb03e',
  'FastAPI':          '#009688',
  'Vite':             '#646cff',
  'Angular':          '#dd0031',
  'NumPy':            '#4dabcf',
  'Pandas':           '#e70488',
  'Matplotlib':       '#11a0d9',
  // Tools
  'Git':              '#f05032',
  'Cypress':          '#69d3a7',
  'RESTful APIs':     '#a78bfa',
  'SQLAlchemy':       '#d71f00',
  'GPT-4 API':        '#74aa9c',
  'GPT-4':            '#74aa9c',
  'Claude API':       '#d4a27f',
  'Gemini API':       '#8e75b2',
  // Misc / project tags
  'OOP':                  '#f89820',
  'Procedural Generation':'#a78bfa',
  'File I/O':             '#a8b9cc',
  'Prompt Engineering':   '#74aa9c',
  'Multi-Agent':          '#a78bfa',
  'RDF':                  '#0085ca',
};

export function tagStyle(name) {
  const color = skillColors[name] || '#a78bfa';
  return {
    '--skill-color':        color,
    '--skill-color-bg':     `${color}18`,
    '--skill-color-border': `${color}50`,
    '--skill-color-glow':   `${color}35`,
  };
}
