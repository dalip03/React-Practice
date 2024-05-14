import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  let token = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  let url = `https://api.exchangerate-api.com/v4/latest/${currency}`;

  useEffect(() => {
    fetch(token)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
