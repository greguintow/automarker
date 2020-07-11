let { useMemo } = require('react')
let automarker = require('..')

function useMarker(str, search) {
	return useMemo(() => automarker(str, search), [str, search])
}

module.exports = useMarker
