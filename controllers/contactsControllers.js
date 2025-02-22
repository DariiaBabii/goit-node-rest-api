import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactsService.listContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve contacts" });
  }
};

export const getOneContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsService.getContactById(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve contact" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const deletedContact = await contactsService.removeContact(contactId);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete contact" });
  }
};

export const createContact = async (req, res) => {
  try {
    const newContact = await contactsService.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Failed to create contact" });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const updateContact = await contactsService.updateContact(
      contactId,
      req.body
    );

    if (!updateContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updateContact);
  } catch (error) {
    res.status(500).json({ message: "Failed to update contact" });
  }
};
