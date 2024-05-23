module.exports = {
  routes: [
    {
      "method": "GET",
      "path": "/convert-media-files/:id",
      "handler": "convert-media.findFileById",
      "config": {
        "policies": []
      }
    }
    
  ],
};
