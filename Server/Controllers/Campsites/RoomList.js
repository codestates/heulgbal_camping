const { room, room_images } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).send('Invalid request');
  }

  room
    .findAll({
      attributes: [
        'id',
        'title',
        'content',
        'notice',
        'minimum_people',
        'maximum_people',
        'reservation_date_startday',
        'reservation_date_endday',
        'price',
        'reservation_state',
        'campsite_id',
        'people_extracharge',
      ],
      where: {
        id,
      },
      include: [
        {
          model: room_images,
          attributes: ['id', 'image_url', 'room_id'],
        },
      ],
    })
    .then(data => {
      if (!data) {
        res.status(204).send('empty data');
      } else {
        res.status(200).send(data);
      }
    })
    .catch(err => {
      console.log(err);
    });
};
