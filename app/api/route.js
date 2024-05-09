// pages/api/customRoute.js

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'


const SUPABASE_URL = 'https://tnrnbvggkjyhgfqwbjtb.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRucm5idmdna2p5aGdmcXdianRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNjI5ODcsImV4cCI6MjAzMDYzODk4N30.13uYxEkOIcBHaXeadljH-vvjAXTT2_qkuFzg9KRdRY4'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


export async function GET(req) {
    
    const { data, error } = await supabase
        .from('Epics')
        .select('*')
        // .select('problem', { count: 'exact' })
        // .groupBy('problem')
        // .order('count', { ascending: false });
        // .select('problem')
        // .select('desc')
        // .groupBy('problem')
        // .order('count', { ascending :false})
        // .contains('location',["text","potholes"])

    if (error) return NextResponse.json({ error: error.message })

    // Return the custom response
    return NextResponse.json({data });
}

