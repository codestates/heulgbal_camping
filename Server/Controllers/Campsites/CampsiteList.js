const { campsite, campsite_images } = require('../../models');
module.exports = async (req, res) => {
  try {
    const campsiteList = await campsite.findAll({
      attributes: ['id', 'title', 'content', 'address', 'business_id'],
      include: [
        {
          model: campsite_images,
          attributes: ['id', 'image_url', 'campsite_id'],
        },
      ],
    });
    res.status(200).send({ campsiteList });
  } catch (error) {
    res.status(500).send(error);
  }
};
