interface Highlight {
	text: string
	highlight: boolean
}

/**
 * ```jsx
 * import automarker from 'automarker'
 *
 * const str = 'peter pepper'
 * const search = 'pe'
 *
 * const parts = automarker(str, search)
 *
 * ...
 * <p>
 *   {parts.map(part => {
 *      return part.highlight ? <mark>{part.text}</mark> : part.text
 *   })}
 * </p>
 * ```
 * @param str Base String
 * @param search The Search String
 */
export default function (str: string, search: string | RegExp): Highlight[]
