import { NextResponse } from 'next/server'

export async function GET(req, res) {
    console.log('Hello')
    const lists = [
        {id: 1, name: 'Albert Einstein'},
        {id: 2, name: 'Oppenheimer'},
    ]
  return NextResponse.json({ lists })
}