import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: true, message: 'Request received. Connect this route to your real endpoint.' });
}
