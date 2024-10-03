let useMemo = require('react').useMemo
let automarker = require('..')

function useMarker(str, search) {
  return useMemo(() => automarker(str, search), [str, search])
}

exports.useMarker = useMarker
