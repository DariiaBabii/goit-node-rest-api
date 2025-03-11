import Contact from "../models/contactsModel.js";

export const listContacts = async () => {
  return await Contact.findAll();
};

export const getContactById = async (id) => {
  console.log("Looking for contact with id:", id);
  return await Contact.findByPk(id);
};

export const removeContact = async (id) => {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  await contact.destroy();
  return contact;
};

export const addContact = async (data) => {
  return await Contact.create(data);
};

export const updateContactInService = async (id, data) => {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  return await contact.update(data);
};

export const updateStatusContact = async (id, { favorite }) => {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  contact.favorite = favorite;
  await contact.save();
  return contact;
};
