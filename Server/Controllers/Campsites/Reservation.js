const { reservation, options } = require('../../models');

module.exports = async (req, res) => {
  const good = req.params;

  reservation
    .findAll({
      attributes: [
        'room_id',
        'option_quantity',
        'people_count',
        'customer_id',
        'room_approval_state',
      ],
    })
    .then(() => {});
};
