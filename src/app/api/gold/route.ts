import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Get the API key and API URL from environment variables
        const apiKey = process.env.METAL_API_KEY;
        const apiUrl = process.env.METAL_API_URL;

        if (!apiKey || !apiUrl) {
            return NextResponse.json(
                { error: 'API key or URL is missing' },
                { status: 500 }
            );
        }

        // Construct the full URL with query parameters
        const fullUrl = `${apiUrl}?api_key=${apiKey}&base=USD&currencies=XAU`;

        // Call the MetalPrice API using fetch
        const response = await fetch(fullUrl);

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch gold price data' },
                { status: 500 }
            );
        }

        // Parse the JSON response
        const data = await response.json();

        // Extract the gold price (USD to XAU)
        const goldPrice = data?.rates?.USDXAU;

        // Check if the gold price is available and return it
        if (goldPrice) {
            return NextResponse.json({ success: true, price: goldPrice });
        } else {
            return NextResponse.json(
                { error: 'Gold price not found' },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error('Error fetching gold price data:', error);
        return NextResponse.json(
            { error: 'An error occurred while fetching gold price data' },
            { status: 500 }
        );
    }
}
