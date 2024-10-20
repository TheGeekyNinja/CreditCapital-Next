// src/app/api/coins/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network&order=market_cap_desc&per_page=1&page=1&sparkline=false'
    );
    
    // Ensure the response is OK
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch coin data' }, { status: 500 });
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching coin data:', error);
    return NextResponse.json({ error: 'An error occurred while fetching coin data' }, { status: 500 });
  }
}
