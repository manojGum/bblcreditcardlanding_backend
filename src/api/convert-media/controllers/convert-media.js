'use strict';
const fs = require('fs');

/**
 * A set of functions called "actions" for `convert-media`
 */

module.exports = {
  async findFileById(ctx) {
    // Retrieve the file ID from the request parameters or query string
    const { id } = ctx.params;

    try {
      // Fetch the file by ID
      const file = await strapi.query('plugin::upload.file').findOne({ where: { id: id } });
      
      if (file) {
        const filePath = `./public`+file.url;
        try {
          const fileContent = await fs.readFileSync(filePath, {encoding: 'base64'});
          return {
            data: {
              content: fileContent,
              content_small: '', //(file?.formats?.small?.url)?await fs.readFileSync(`./public`+file.formats.small.url, {encoding: 'base64'}):'',
              content_thumbnail: '', //(file?.formats?.thumbnail?.url)?await fs.readFileSync(`./public`+file.formats.thumbnail.url, {encoding: 'base64'}):'',
              ext: file.ext,
              mime: file.mime,
            },
            status: 200,
            message: '',
          }
        } catch (error) {
          return {
            data: {
            },
            status: 500,
            message: error,
          }
        }
      } else {
        return {
          data: {
          },
          status: 500,
          message: 'File not found',
        }
      }
      
    } catch (error) {
      // If an error occurs, return 500 status
      return {
        data: {
        },
        status: 500,
        message: 'File not found',
      }
    }
  },
};
