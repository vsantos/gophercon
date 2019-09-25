// example theme.js
import { dark as theme } from 'mdx-deck/themes'
import ghcolors from 'react-syntax-highlighter/styles/prism/ghcolors'
import duotoneDark from 'prism-react-renderer/themes/vsDark'
import prismGo from 'react-syntax-highlighter/languages/prism/go'
import prismProtobuf from 'react-syntax-highlighter/languages/prism/protobuf'

export default {
  ...theme,
  font: 'Nunito, sans-serif',
  monospace: '"Nunito", monospace',
  colors: {
    ...theme.colors,
    text: '#f7f7f7',
    background: '#333',
    link: '#ccc',
    heading: '#b27300',
  },
  blockquote: {
    fontStyle: 'italic'
  },
  prism: {
    style: ghcolors,
    languages: {
      go: prismGo,
      protobuf: prismProtobuf
    }
  },
  codeSurfer: {
    ...duotoneDark,
    plain: {
      color: "#f7f7f7",
      backgroundColor: "333"
    },
    showNumbers: false
  }
}
