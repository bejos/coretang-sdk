import { FLEXUSD_ADDRESS, SEP206_ADDRESS, WBCH_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'
import { TokenMap } from '../types/TokenMap'

export const FLEXUSD: TokenMap = {
  [ChainId.COREDAO]: new Token(ChainId.COREDAO, FLEXUSD_ADDRESS[ChainId.COREDAO], 18, 'flexUSD', 'flexUSD'),
  [ChainId.COREDAO_AMBER]: new Token(ChainId.COREDAO_AMBER, FLEXUSD_ADDRESS[ChainId.COREDAO_AMBER], 18, 'flexUSD', 'flexUSD')
}

export const WBCH: TokenMap = {
  [ChainId.COREDAO]: new Token(ChainId.COREDAO, WBCH_ADDRESS[ChainId.COREDAO], 18, 'WBCH', 'Wrapped BCH'),
  [ChainId.COREDAO_AMBER]: new Token(ChainId.COREDAO_AMBER, WBCH_ADDRESS[ChainId.COREDAO_AMBER], 18, 'WBCH', 'Wrapped BCH')
}

export const WNATIVE: TokenMap = {
  [ChainId.COREDAO]: WBCH[ChainId.COREDAO],
  [ChainId.COREDAO_AMBER]: WBCH[ChainId.COREDAO_AMBER]
}

export const SEP206: TokenMap = {
  [ChainId.COREDAO]: new Token(ChainId.COREDAO, SEP206_ADDRESS[ChainId.COREDAO], 18, 'BCH', 'Bitcoin Cash SEP206'),
  [ChainId.COREDAO_AMBER]: new Token(ChainId.COREDAO_AMBER, SEP206_ADDRESS[ChainId.COREDAO_AMBER], 18, 'BCH', 'Bitcoin Cash SEP206')
}
