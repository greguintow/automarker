let { takeParts } = require('..')

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
describe('Test 2', () => {
	const str = 'test'
	const search = 's'
	const parts = takeParts(str, search)
	it('should have 1 highlight', () => {
		expect(parts.filter(part => part.highlight)).toHaveLength(1)
	})
	it('should be equal original string', () => {
		const final = parts.reduce((total, b) => total + b.text, '')
		expect(final).toBe(str)
	})
	it('should have length 8', () => {
		expect(parts).toHaveLength(3)
	})
})
describe('Test 3', () => {
	const str = 'consulting test'
	const search = 's'
	const parts = takeParts(str, search)
	it('should have 2 highlights', () => {
		expect(parts.filter(part => part.highlight)).toHaveLength(2)
	})
	it('should be equal original string', () => {
		const final = parts.reduce((total, b) => total + b.text, '')
		expect(final).toBe(str)
	})
	it('should have length 5', () => {
		expect(parts).toHaveLength(5)
	})
})
