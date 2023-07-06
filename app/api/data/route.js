import { NextResponse } from 'next/server'

export async function GET(req, res) {
    console.log('Hello')
    const lists = [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Helen Keller'},
    ]
  return NextResponse.json({ lists })
}