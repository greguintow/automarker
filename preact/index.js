let { useMemo } = require('preact/hooks')
let automarker = require('..')

function useMarker(str, search) {
	return useMemo(() => automarker(str, search), [str, search])
}

module.exports = useMarker
