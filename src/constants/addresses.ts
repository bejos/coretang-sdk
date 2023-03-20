import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const FLEXUSD_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72',
  // [ChainId.COREDAO_AMBER]: '0xFed990d491D8c563ce3d636D7536d7F9a3E2De12'
  [ChainId.COREDAO_AMBER]: '0xD0E6466293c6CdA8CaA96A57683909383c01411D' // mock
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x2F3f70d13223EDDCA9593fAC9fc010e912DF917a',
  [ChainId.COREDAO_AMBER]: '0x036ed8fa21a8f217Ad33facB6ae6ABEf346CD41a'
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0xb93184fB3eEDb4d32150763578cA305488240c8e',
  [ChainId.COREDAO_AMBER]: '0xeE243671a3Cd09cce1887cA9D4aCB2Eb8e504BdA'
}

export const TANGOROLL_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0xD1b0Beaec4C43c02A2281333E1A169f7fCF0DEA4',
  [ChainId.COREDAO_AMBER]: '0x226Cf71d43EB4e20570ff07228Fc115e7C9e3373'
}

export const TANGO_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x73BE9c8Edf5e951c9a0762EA2b1DE8c8F38B5e91',
  [ChainId.COREDAO_AMBER]: '0xA13469C2D531AEc9b7a1445C1f00f36D17BD93b5'
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x38cC060DF3a0498e978eB756e44BD43CC4958aD9',
  [ChainId.COREDAO_AMBER]: '0x184B1f2F2839f90a5109Eb738a074b370B73773E'
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x98Ff640323C059d8C4CB846976973FEEB0E068aA',
  [ChainId.COREDAO_AMBER]: '0x156e548342b14C09Cc85955799Fc451aAaCFe40b'
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x83fffD9E418e5c6932F51FA197F8Bd2A58CAfe66',
  [ChainId.COREDAO_AMBER]: '0x084d40C7B7a7cf35cd47a4351bcB869e4187f690'
}

export const BENTOBOX_ADDRESS: AddressMap = {
  [ChainId.COREDAO_AMBER]: '0x09125777d06524FE085a8478A947BC2bDD7e9ce2'
}
export const KASHI_ADDRESS: AddressMap = {
  [ChainId.COREDAO_AMBER]: '0x72125F882e0Eee6821D9Cf24c160310962D3009A'
}
export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {}

export const WBCH_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
  [ChainId.COREDAO_AMBER]: '0x17F4FCF5b6E0A95D4eE331c8529041896A073F9b'
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: WBCH_ADDRESS[ChainId.COREDAO],
  [ChainId.COREDAO_AMBER]: WBCH_ADDRESS[ChainId.COREDAO_AMBER],
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0xFdcd933689837c8173cd86bC3168918629fAe8d7',
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0xCfb86556760d03942EBf1ba88a9870e67D77b627',
  [ChainId.COREDAO_AMBER]: '0x32f1FBE59D771bdB7FB247FE97A635f50659202b',
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x3718e9C405D0bC779870355C34fb5624196A1cAA',
  [ChainId.COREDAO_AMBER]: '0xFb02AE15114268470108eC79de69B05c2629Caf7',
}

export const BORING_HELPER_ADDRESS: AddressMap = {
  [ChainId.COREDAO_AMBER]: '0xA8eEFbCED70b77C2a717f4C6f9dA8E6Ea0Aa44eD'
}

export const AGGREGATOR_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0xEd2E356C00A555DDdd7663BDA822C6acB34Ce614',
}

export const ORDERS_CASH_V1_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0xcc9195c34ef5CC65F5A377037a50F86c066F0a32',
}

export const SEP206_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x0000000000000000000000000000000000002711',
  [ChainId.COREDAO_AMBER]: '0x0000000000000000000000000000000000002711',
}

export const SABLIER_ADDRESS: AddressMap = {
  [ChainId.COREDAO]: '0x5eB85d9D7dc2F2C70F4C13b4Ba9Ed21d65141037',
  [ChainId.COREDAO_AMBER]: '0xeE85373F26E5380Fbd71FB7295BD68fdd0818887',
}

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
}

export const TWAP_0_ORACLE_ADDRESS: AddressMap = {
  [ChainId.COREDAO_AMBER]: "0xc6Ada1047F56ed13952d5ec8424a02ae4a41626b"
}

export const TWAP_1_ORACLE_ADDRESS: AddressMap = {
  [ChainId.COREDAO_AMBER]: "0x994BD855653ACCA620f3494ffA3D3696ccdCD5E4"
}
