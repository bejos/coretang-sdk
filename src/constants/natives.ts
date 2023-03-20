import { CoreDAO } from '../entities/Native'

import { ChainId } from '../enums'

export const NATIVE = {
  [ChainId.COREDAO]: CoreDAO.onChain(ChainId.COREDAO),
  [ChainId.COREDAO_AMBER]: CoreDAO.onChain(ChainId.COREDAO_AMBER)
}
