exports.handler = async function(event) {
  const path = event.queryStringParameters?.path || '/schedule?sportId=1';
  const url = `https://statsapi.mlb.com/api/v1${path}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch(err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
