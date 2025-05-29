import { contacts, ebookDownloads, type Contact, type InsertContact, type EbookDownload, type InsertEbookDownload } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createEbookDownload(download: InsertEbookDownload): Promise<EbookDownload>;
  getEbookDownloads(): Promise<EbookDownload[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private ebookDownloads: Map<number, EbookDownload>;
  private currentContactId: number;
  private currentEbookId: number;

  constructor() {
    this.contacts = new Map();
    this.ebookDownloads = new Map();
    this.currentContactId = 1;
    this.currentEbookId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createEbookDownload(insertDownload: InsertEbookDownload): Promise<EbookDownload> {
    const id = this.currentEbookId++;
    const download: EbookDownload = {
      ...insertDownload,
      id,
      createdAt: new Date(),
    };
    this.ebookDownloads.set(id, download);
    return download;
  }

  async getEbookDownloads(): Promise<EbookDownload[]> {
    return Array.from(this.ebookDownloads.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
