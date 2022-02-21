
import { getHighlighter, setCDN } from 'shiki'

setCDN('node_modules/shiki/')

export let highlighter

export async function initHighlighter() {
  highlighter = await getHighlighter({
    theme: 'nord',
    langs: ['javascript']
  })
}