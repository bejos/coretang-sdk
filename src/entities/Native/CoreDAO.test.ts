import { CoreDAO } from './CoreDAO'

describe('CoreDAO', () => {
  it('static constructor uses cache', () => {
    expect(CoreDAO.onChain(1116) === CoreDAO.onChain(1116)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(CoreDAO.onChain(1116) !== CoreDAO.onChain(1115)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(CoreDAO.onChain(1116).equals(CoreDAO.onChain(1115))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(CoreDAO.onChain(1116).equals(CoreDAO.onChain(1116))).toEqual(true)
  })
})
