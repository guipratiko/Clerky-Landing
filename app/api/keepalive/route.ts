import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  // Endpoint simples para manter o servidor ativo
  // Pode ser chamado periodicamente para evitar cold starts
  return NextResponse.json(
    {
      status: 'alive',
      timestamp: new Date().toISOString(),
      message: 'Servidor mantido ativo',
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function POST() {
  // Também aceita POST para manter flexibilidade
  return GET();
}
