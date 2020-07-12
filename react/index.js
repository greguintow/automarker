let { useMemo } = require('react')
let { takeParts } = require('..')

exports.useMarker = function (str, search) {
	return useMemo(() => takeParts(str, search), [str, search])
}
