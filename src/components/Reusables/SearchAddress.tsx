'use client'; // Ensure this component is rendered on the client-side

import { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { getAddress, isAddress } from 'viem';
import { getEnsAddress } from '@wagmi/core';
import { normalize } from 'viem/ens';
import debounce from 'lodash/debounce';
import { config } from '@/config';

interface SearchAddressProps {
  onSearch: (newAddress: string) => void;
}

const SearchAddress: React.FC<SearchAddressProps> = ({ onSearch }) => {
  const [searchAddress, setSearchAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleInputChange = useCallback(
    async (inputValue: string) => {
      setError(null);
      setSuggestions([]);

      if (inputValue.includes('.eth')) {
        try {
          const resolvedAddress = await getEnsAddress(config, {
            name: normalize(inputValue),
          });

          if (resolvedAddress) {
            setSuggestions([resolvedAddress]);
          } else {
            setError('No ENS found.');
          }
        } catch (e) {
          console.error('Failed to resolve ENS:', e);
          setError('Error resolving ENS domain.');
        }
      } else if (isAddress(inputValue)) {
        setSuggestions([getAddress(inputValue)]);
      } else {
        setError('Invalid address or ENS.');
      }
    },
    []
  );

  const debouncedHandleInputChange = useMemo(
    () => debounce(handleInputChange, 500),
    [handleInputChange]
  );

  const handleInputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchAddress(inputValue);
    debouncedHandleInputChange(inputValue);
  };

  const selectSuggestion = (suggestion: string) => {
    setSearchAddress(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  const handleSearch = () => {
    if (isAddress(searchAddress)) {
      const address = getAddress(searchAddress);
      onSearch(address);
      setSuggestions([]);
      router.push(`/dashboard/${address}`);
    } else {
      setError('Invalid ENS or wallet address. Please try again.');
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-lg mb-4">
      <input
        value={searchAddress}
        onChange={handleInputChangeEvent}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Enter ENS or Wallet Address"
        className={`p-3 border rounded-full text-black w-full ${error ? 'border-red-500' : ''}`}
      />
      {suggestions.length > 0 && (
        <ul className="bg-white rounded-lg shadow-md">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => selectSuggestion(suggestion)}
              className="cursor-pointer p-2 hover:bg-gray-200 text-black"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SearchAddress;
