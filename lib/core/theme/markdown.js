const color = require('./color.js');

const MarkdownTheme = { md: {
  h1: {
    textAlign: 'left',
    marginTop: '0.5em',
    color: color.title,
    fontWeight: 300,
    fontSize: '200%',
    lineHeight: '1.2em'
  },
  h2: {
    textAlign: 'left',
    marginTop: '0.5em',
    color: color.title,
    fontWeight: 300,
    fontSize: '180%',
    lineHeight: '1.2em'
  },
  h3: {
    textAlign: 'left',
    marginTop: '0.5em',
    color: color.title,
    fontWeight: 300,
    fontSize: '150%',
    lineHeight: '1.2em'
  },
  h4: {
    textAlign: 'left',
    marginTop: '0.5em',
    color: color.content,
    fontWeight: 300,
    fontSize: '120%',
    lineHeight: '1.2em'
  },
  h5: {
    textAlign: 'left',
    marginTop: '0.5em',
    color: color.content,
    fontWeight: 300,
    fontSize: '100%',
    lineHeight: '1.2em'
  },
  h6: {
    textAlign: 'left',
    marginTop: '0.5em',
    color: color.contentSecondary,
    fontWeight: 300,
    fontSize: '100%',
    lineHeight: '1.2em'
  },
  p: {
    lineHeight: '1.5em',
    color: color.content,
    paddingTop: '10px',
    wordWrap: 'break-word'
  },
  ul: {
    padding: '5px 20px'
  },
  ol: {
    padding: '5px 20px'
  },
  li_p: {
    lineHeight: '1.5em',
    color: color.content,
    wordWrap: 'break-word'
  },
  fence: {
    fontFamily: `
      "SFMono-Regular",
      source-code-pro,
      Menlo,
      Monaco,
      Consolas,
      "Roboto Mono",
      "Droid Sans Mono",
      "Liberation Mono",
      Consolas,
      "Courier New",
      Courier,
      monospace`,
    display: 'block',
    margin: '20px 0',
    padding: '0.5em',
    borderLeft: '4px solid ' + color.primary,
    borderRadius: '0.3em',
    fontSize: '0.8em',
    wordBreak: 'break-word',
    overflowX: 'auto',
    lineHeight: '1.5em'
  },
  code: {
    padding: '0.2em 0.4em',
    background: color.tertiary,
    fontSize: '85%',
    borderRadius: '3px'
  },
  anchor: {
    display: 'block',
    position: 'relative',
    top: '-100px'
  },
  table: {
    display: 'block',
    width: '100%',
    overflow: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    boxSizing: 'borderBox',
    wordWrap: 'break-word'
  },
  tr: {},
  th: {
    padding: '5px 10px',
    border: '1px solid #dfe2e5',
    verticalAlign: 'top',
    fontWeight: '600'
  },
  td: {
    padding: '5px 10px',
    border: '1px solid #dfe2e5',
    verticalAlign: 'top'
  }
}}

MarkdownTheme.md.fence_bash = Object.assign({}, MarkdownTheme.md.fence, {
  background: color.nav.primary,
  color: color.nav.fontSecondary
});

module.exports = MarkdownTheme;
