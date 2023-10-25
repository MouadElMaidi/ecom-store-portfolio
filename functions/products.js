/* eslint-disable no-undef */

const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async function () {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        price,
        bestseller,
        images,
        description,
        colors,
        sizes,
        stock,
        reviews,
        category,
      } = fields;

      const { url } = images[0];
      return {
        id,
        name,
        bestseller,
        colors,
        sizes,
        reviews,
        category,
        imgUrl: url,
        stock,
        description,
        price,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
