import { useCallback, useState } from 'react';

export const useFormInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback((e) => setValue(e.target.value), []);

  const handleReset = useCallback(() => setValue(''), []);

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
};
