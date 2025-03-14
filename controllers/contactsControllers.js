import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import Contact from "../models/contactsModel.js";

// GET /api/contacts
export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.listContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

// GET /api/contacts/:id
export const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsService.getContactById(id);
    if (!contact) throw HttpError(404, "Not found");
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/contacts/:id
export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removedContact = await contactsService.removeContact(id);
    if (!removedContact) throw HttpError(404, "Not found");
    res.json(removedContact);
  } catch (error) {
    next(error);
  }
};

// POST /api/contacts
export const createContact = async (req, res, next) => {
  try {
    const newContact = await contactsService.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

// PUT /api/contacts/:id
export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedContact = await contactsService.updateContact(id, req.body);
    if (!updatedContact) throw HttpError(404, "Not found");
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
};

export const updateStatusContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;
    if (favorite === undefined) {
      throw HttpError(400, "Missing field favorite");
    }
    const updatedContact = await contactsService.updateStatusContact(id, {
      favorite,
    });
    if (!updatedContact) throw HttpError(404, "Not found");
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
};
