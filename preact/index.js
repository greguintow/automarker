let { useMemo } = require('preact/hooks')
let { takeParts } = require('..')

exports.useMarker = function (str, search) {
	return useMemo(() => takeParts(str, search), [str, search])
}
