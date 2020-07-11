interface Highlight {
	text: string
	highlight: boolean
}

/**
 * ```jsx
 * import useMarker from 'automarker/preact'
 *
 * const [text, setText] = useState('peter pepper')
 * const [search, setSearch] = useState('pe')
 * const parts = useMarker(text, search)
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
function useMarker(str: string, search: string | RegExp): Highlight[]

export default useMarker
