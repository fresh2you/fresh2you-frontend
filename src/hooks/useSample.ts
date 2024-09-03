import { useAtom } from 'jotai';
import { countryAtom } from '../stores/jotaiSample';

const useSample = () => {
  const [country, setCountry] = useAtom(countryAtom);

  return { country, setCountry };
};

export default useSample;
