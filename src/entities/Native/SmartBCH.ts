import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WBCH } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class CoreDAO extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'BCH', 'BCH')
  }

  public get wrapped(): Token {
    const weth9 = WBCH[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _cache: { [chainId: number]: CoreDAO } = {}

  public static onChain(chainId: number): CoreDAO {
    return this._cache[chainId] ?? (this._cache[chainId] = new CoreDAO(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
