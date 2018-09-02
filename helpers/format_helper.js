var FormatHelper = {};

FormatHelper.formatName = (name) => {
  return name.split('-').join(' ');
};

module.exports = FormatHelper;

