let takeParts = require('..')

describe('Test', () => {
	const str = 'legal le LE maneilero'
	const search = 'le'
	const parts = takeParts(str, search)
	it('should have 4 highlights', () => {
		expect(parts.filter(part => part.highlight)).toHaveLength(4)
	})
	it('should be equal original string', () => {
		const final = parts.reduce((total, b) => total + b.text, '')
		expect(final).toBe(str)
	})
	it('should have length 8', () => {
		expect(parts).toHaveLength(8)
	})
})
