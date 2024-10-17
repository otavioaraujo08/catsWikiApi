import "jsr:@std/dotenv/load";
import {serve} from 'https://deno.land/std@0.136.0/http/server.ts'
import { MongoClient } from "npm:mongodb@6.1.0";

const client = new MongoClient(Deno.env.get("MONGO_CLIENT"))

await client.connect();

function requestHandler() {
    const body = JSON.stringify({ message: "Servidor ativado com sucesso!"})

    return new Response(body, {
        status: 201,
        headers: {
            "content-type": "application/json"
        }
    })
}

serve(requestHandler, {port: 2000})