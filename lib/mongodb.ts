import { MongoClient, Db, ObjectId } from "mongodb";

let client: MongoClient | null = null;
let db: Db | null = null;

/**
 * Conecta ao MongoDB e retorna a instância do banco
 * Reutiliza conexão existente se disponível
 */
async function getDatabase(): Promise<Db> {
  if (db) {
    return db;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI não está configurada");
  }

  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log("[MONGODB] Conectado ao banco de dados");
  }

  // Extrair nome do banco da URI ou usar 'landing' como padrão
  const dbName = uri.split("/").pop()?.split("?")[0] || "landing";
  db = client.db(dbName);

  return db;
}

/**
 * Busca o base64 da imagem do produto no MongoDB pelo _id
 */
export async function getProductImageBase64(): Promise<string | null> {
  try {
    const database = await getDatabase();
    
    // ID do documento no MongoDB
    const documentId = "696fbb5a740947252a55a039";
    
    // AJUSTE AQUI: Nome da collection (ex: "products", "checkout", "images")
    const collectionName = "products";
    
    // AJUSTE AQUI: Nome do campo que contém o base64 (ex: "imageBase64", "base64", "image")
    const fieldName = "imageBase64";

    const collection = database.collection(collectionName);
    
    // Buscar por _id
    let query: { _id: ObjectId } | { _id: string };
    try {
      // Tentar converter para ObjectId
      query = { _id: new ObjectId(documentId) };
    } catch {
      // Se falhar, usar como string (ObjectId aceita string também)
      query = { _id: documentId };
    }

    const document = await collection.findOne(query);

    if (!document) {
      console.warn(`[MONGODB] Documento não encontrado na collection "${collectionName}" com _id: ${documentId}`);
      return null;
    }

    const base64 = document[fieldName];
    
    if (!base64 || typeof base64 !== 'string') {
      console.warn(`[MONGODB] Campo "${fieldName}" não encontrado ou inválido no documento`);
      return null;
    }

    console.log(`[MONGODB] Base64 recuperado com sucesso (${base64.length} caracteres)`);
    return base64;
  } catch (error) {
    console.error("[MONGODB] Erro ao buscar base64:", error);
    return null;
  }
}

/**
 * Fecha a conexão com o MongoDB (útil para cleanup)
 */
export async function closeConnection(): Promise<void> {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log("[MONGODB] Conexão fechada");
  }
}
