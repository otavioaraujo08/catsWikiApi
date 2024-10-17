import "jsr:@std/dotenv/load";
import { serve } from 'https://deno.land/std@0.136.0/http/server.ts';
import { MongoClient } from "npm:mongodb@6.1.0";
import mongoose from "npm:mongoose@^6.7";

const mongoUri = Deno.env.get("MONGO_CLIENT");

async function connectToMongoDb() {
    try {
        const client = new MongoClient(mongoUri);
        await client.connect();
        console.log("MongoDB connected successfully.");
        console.log("Mongoose connection state:", mongoose.connection.readyState);
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

function requestHandler(request) {
    const body = JSON.stringify({ message: "Servidor ativado com sucesso!" });

    return new Response(body, {
        status: 200,
        headers: {
            "content-type": "application/json",
        },
    });
}

async function main() {
    await connectToMongoDb();
    serve(requestHandler, { port: 2000 });
    console.log("Server is running on http://localhost:2000");
}

main();
