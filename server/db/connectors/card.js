const mongoose = require('mongoose');
const Card = mongoose.model('Card');
const { rescheduleCard } = require('../../helper/scheduler');
const { checkAuth, createFilter } = require('../authHelper');

function generateCardModel({ user } = {}) {
  const find = (where = {}) => {
    checkAuth(user);
    return Card.find(createFilter(where, user));
  };

  const findOne = (where = {}) => {
    checkAuth(user);
    return Card.findOne(createFilter(where, user));
  };

  const review = async ({ id, answer, timeOfReview }) => {
    checkAuth(user);
    const reviewedCard = await findOne(createFilter({ _id: id }, user));
    if (!reviewedCard) {
      return null;
    }
    const update = rescheduleCard({
      interval: reviewedCard.interval,
      dueTime: reviewedCard.due,
      ease: reviewedCard.ease,
      timeOfReview,
      answer
    });
    return Card.findByIdAndUpdate(createFilter({ _id: id }, user), update, {
      new: true
    });
  };

  return {
    find,
    findOne,
    review
  };
}

module.exports = generateCardModel;
