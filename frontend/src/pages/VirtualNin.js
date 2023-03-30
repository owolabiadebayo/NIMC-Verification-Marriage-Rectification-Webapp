import React, { useState, useEffect } from 'react';

function VirtualNin() {
  const [responseData, setResponseData] = useState(null);
  const endpointUrl = 'https://testtk.nimc.gov.ng/api/v1/tokenization/vNIN';
  const apiKey = 'nudjthujPIIi0FnmnYGKaXj1mDWfjhgvjhgj';
  const userID = 'ABCDEF-8910';
  const shortCode = '123456';

  useEffect(() => {
    async function callApi() {
      const requestOptions = {
        method: 'POST',
        headers: { 'x-api-key': apiKey },
        body: new URLSearchParams({
          userID,
          shortCode,
        }),
      };
      const response = await fetch(endpointUrl, requestOptions);
      const data = await response.json();
      console.log(data)
      setResponseData(data);
    }
    callApi();
  }, [endpointUrl, apiKey, userID, shortCode]);
console.log(responseData)
  return (
    <div>
      {responseData ? (
        <p>Response Data: {JSON.stringify(responseData)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VirtualNin;