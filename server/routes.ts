import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertEbookDownloadSchema } from "../shared/schema";
import { z } from "zod";
import { getChatResponse } from "./openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar contatos" 
      });
    }
  });

  // E-book download subscription
  app.post("/api/ebook-downloads", async (req, res) => {
    try {
      const downloadData = insertEbookDownloadSchema.parse(req.body);
      const download = await storage.createEbookDownload(downloadData);
      res.json({ success: true, download });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Email inválido", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get all e-book downloads (for admin purposes)
  app.get("/api/ebook-downloads", async (req, res) => {
    try {
      const downloads = await storage.getEbookDownloads();
      res.json(downloads);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar downloads" 
      });
    }
  });

  // Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ 
          success: false, 
          message: "Mensagem é obrigatória" 
        });
      }

      const response = await getChatResponse(message);
      res.json({ success: true, response });
    } catch (error) {
      console.error("Erro no chatbot:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erro interno do servidor" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
