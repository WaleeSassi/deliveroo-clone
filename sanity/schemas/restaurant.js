export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
    },
    {
      name: "image",
      title: "Image of the Restaurant",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude of the restaurant",
      type: "number",
    },
    {
      name: "long",
      title: "longtude of the restaurant",
      type: "number",
    },
    {
      name: "adress",
      title: "Restaurant address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "enter a rating from (1-5 Stars)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
