import { useState, useEffect } from 'react';
import useFarmPairReserves from '../hooks/useFarmPairReserves';
import { TVLParser } from '../../../libraries/TVLParser';

export default function useTVLFarmViewModel(yieldFarmContractAddress: string) {
  const [viewModel, setViewModel] = useState<string>('');
  const { tvlParameters, decimals } = useFarmPairReserves?.(yieldFarmContractAddress);

  useEffect(() => {
    const tvlParser = new TVLParser(decimals, undefined, tvlParameters);
    setViewModel(tvlParser.parse());
  }, [decimals, tvlParameters]);

  return {
    viewModel,
  };
}
