import fetch from 'node-fetch'

async function getTQBR() {
  const response = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities.json');
  const data = await response.json();
  return data
}

getTQBR()